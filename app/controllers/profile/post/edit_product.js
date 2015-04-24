import Ember from 'ember';
import ErrorMixin from '../../../mixins/server_error';
export default Ember.ObjectController.extend(ErrorMixin, {
 
 	needs: ['profile'],

 	requestEditorContents: false,

 	currentPageBinding: 'controllers.profile.currentPage',

	productImagesBinding: "model.product_images",
	
	product_status_options: null,
	
	currentUserBinding: 'session.currentUser',
	
	isProcessing: false,

	isProcessingDelete: false,
	
	imagesAreSelected: false,
	
	showDeleteModal: false,
	
	animateDeleteModal: false,
	
	selectedImages: [],
	
	deletedImages: [],
	
	animateClose:false,

	prevModelId: false,
	currentModelId: false,

	currentModelIdChanged: function() {
		if( this.get('prevModelId') && this.get('prevModelId') !== this.get('currentModelId')  ){
			this.reset();
		}

		this.set('prevModelId', this.get('currentModelId'));
	}.observes('currentModelId'),

	reset: function() {
		this.setProperties({
			showImageUploadError: false,
			imageUploadError: "",
			selectedImages: [],
			showDeleteModal: false,
			isProcessing: false,
			isProcessingDelete: false,
		})
	},

	setup: function() {
		this.set('canEditProduct', false);
		if(Ember.isEmpty(this.get('model')) || Ember.isEmpty(this.get('currentUser')) ){
			return
		} 

		//Safety Check.  Is current user the owner of this product?
		if( this.get('model').get('product_user').get('id') !== this.get('currentUser').get('id') ){
			console.log("ERROR, not the owner");
			return;
		}

		var selectedStatus;
		var for_sale 		= {name: "for sale", id: 'FOR_SALE'};
		var sold 			= {name: "sold",    id: 'SOLD'};
		var not_for_sale 	= {name: "no longer for sale",    id: 'NOT_FOR_SALE'};
		var status = this.get('model').get('product_status');
		
		if(status === "NOT_FOR_SALE"){
			selectedStatus = not_for_sale;
		}else if(status === "SOLD"){
			selectedStatus = sold;
		}else{
			selectedStatus = for_sale;
		}

		var product_status_options = Ember.ArrayController.create({
		  selectedStatus: selectedStatus,
		  status: [for_sale, sold, not_for_sale],
		}); 
		this.set('product_status_options', product_status_options); 

		

		this.set('currentModelId', this.get('model.id'));

	}.observes('model', 'currentUser'),




	/* Get and set the products images. */
	setSelectedImages: function() {
		if( Ember.isEmpty(this.get('productImages')) ){
			this.set('selectedImages', []);
			return;
		}

		var obj = [];	
		this.get('productImages').forEach(function(image){
			obj.push(image);
		});
		this.set('selectedImages', obj);

	}.observes('productImages.@each', 'model'),


	//Observer: anytime our array of selected images changes, update
	// our list of image_ids.
	imagesIdsChanged: function() {
		var ids = this.get('selectedImages').map(function(image) {
			return image.get('id');
		}); 
		//Set the images on the model.
		var model = this.get('model');
		model.set('product_image_ids', ids); 
		model.set('image_id', ids[0]); 

	}.observes('selectedImages.@each'),

	//Preserves the drag sort order of the images.
	updateSortOrder: function(indexes) { 
		var selectedImages = this.get('selectedImages');
	    selectedImages.beginPropertyChanges();

	    selectedImages.forEach(function(item) {
	      var index = indexes[item.get('id')];
	      item.set('idx', index);
	    }, selectedImages);
	    
	    selectedImages = selectedImages.sortBy('idx');
	    
	    selectedImages.endPropertyChanges();
  
	    this.set('selectedImages', selectedImages);
	},


	removeImage: function(image, collectionName) {
		var objects = [];
		var collection = this.get(collectionName);
		collection.forEach(function(result){
			if( result.get('id') !== image.get('id')){
				objects.push(result);
			}
		});
		this.set(collectionName, objects);
	},

	addImage: function(image, collectionName) {
		var collection = this.get(collectionName);
		collection.pushObject(image);
	},

	toggleImageSelected: function(image) {
		var selectedImages = this.get('selectedImages'); 
		var found = false;

		selectedImages.forEach(function(result){
			if(result.get('id') === image.get('id')){
				found = true;
				return;
			}
		});

		if (found) {
			this.removeImage(image, 'selectedImages');
			this.addImage(image, 'deletedImages');
		} else {
			this.removeImage(image, 'deletedImages');
			this.addImage(image, 'selectedImages');
		}

		//Remove
		// if( found ) { 
		// 	var objects = [];
		// 	selectedImages.forEach(function(result){
		// 		if( result.get('id') !== image.get('id')){
		// 			objects.push(result);
		// 		}
		// 	});
		// 	this.set('selectedImages', objects);
		// 	var deletedImages = this.get('deletedImages');
		// 	deletedImages.pushObject(image)
		// //Add
		// } else {
		// 	selectedImages.pushObject(image);
		// }
	},

	

	saveProduct: function() {
		var _this = this;		
		var model = this.get('model');

		this.set('isProcessing', true);
 

		//Get-Set the product status.
		model.set('product_status', this.get('product_status_options').get('selectedStatus').id);


 		//Model Validations:
		model.validate()
		.then(
			function validateSuccess(){
				return model.save();
			}
		)
		.then(
			function reloadModel(record){		
				return record.reload();
			}
		)
		.then(
			function serverSuccess(record){
				
				_this.set('isProcessing', false);
				
				var user = _this.get('currentUser'); 
				
				_this.set('animateClose', true);
				
				_this.transitionToRoute('profile.post', user, record);

				//Clean Up, Delete images?
				var deletedImages = _this.get('deletedImages');
				deletedImages.forEach(function(image){ 
					image.deleteRecord();
					image.save();
				});


		}, function serverError(error){
				console.log("Error", error);
				_this.set('isProcessing', false);
				//Mixin:
				_this.handleServerError(error)
				_this.set('showErrors', true);
				_this.set('openDrawer', true);
		});
	},




	actions: {

		close: function() {
			this.set('animateClose', true);
		},

		cancel: function() {
			this.set('animateClose', true);
			//this.transitionToRoute('profile', this.get('currentUser'));
		},

		closeModal: function() { 
			var _this = this;
			var model = this.get('model'); 
			this.set('animateClose', true);
			this.transitionToRoute('profile.post', model.get('user.username'), model); 
		}, 

		saveProduct: function() { 
			this.saveProduct();
		},


		//Click "imageClick" in UI
		imageClick: function(event) {
			var image = event.get('image');
			this.toggleImageSelected(image);
		},

		refresh: function(image) {
			this.toggleImageSelected(image);			
		},

		updateSortOrder: function(i) {
			this.updateSortOrder(i);
		},

		imageDelete: function(options) {
			var _this = this;
			var image = options.image;
			var callback = options.cb;

			//Do not delete image if there is only one left.
			if( this.get('selectedImages').length <= 1 ) {
				this.set("imageUploadError", "There must be at least one image.");
				this.set('showImageUploadError', true);
			}else{
				//Toggle image from the selection.
				this.toggleImageSelected(image);
			}
    	},

    	descriptionChange: function(text) { 
			var model = this.get('model');
			model.set('product_description', text);	
		}
	}
});