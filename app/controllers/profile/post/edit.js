import Ember from 'ember';
export default Ember.ObjectController.extend({
 
 	needs: ['profile'],

 	thisPage: "postEdit",
 	currentPageBinding: 'controllers.profile.currentPage',
 	showGridBtn:false,

 	showHeaderChange: function(){  
 		if( this.get('currentPage') === this.get('thisPage')){
 			this.set('controllers.profile.showGridBtn', this.get('showGridBtn'));
 			this.get('controllers.profile').set('showHeader', false);	
 		} 		
 	}.observes('currentPage'),
	
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
	editorialForQuill: "",
	canEditProduct: false,
	openDrawer: false, 

	// reset: function() {
	// 	this.setProperties({
	// 		showImageUploadError: false,
	// 		imageUploadError: "",
	// 		selectedImages: [],
	// 		editorialForQuill: "",
	// 		openDrawer: false,
	// 		showDeleteModal: false,
	// 		isProcessing: false,
	// 		isProcessingDelete: false,
	// 	})
	// },

	setup: function() {
		this.set('canEditProduct', false);
		if(Ember.isEmpty(this.get('model')) || Ember.isEmpty(this.get('currentUser')) ){
			return
		} 

		if( this.get('model').get('product_user').get('id') === this.get('currentUser').get('id') ){
			this.set('canEditProduct', true);
		}

		var selectedStatus;
		var for_sale 		= {name: "for sale", id: 'FOR_SALE'};
		var sold 			= {name: "sold",    id: 'SOLD'};
		var not_for_sale 	= {name: "no longer for sale",    id: 'NOT_FOR_SALE'};
		var status = this.get('model').get('product_status');
		
		if(status == "NOT_FOR_SALE"){
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

		this.set('editorialForQuill', this.get('model.body'));

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

	deletePost: function() {
		var _this = this;		
		var model = this.get('model');

		model.deleteRecord();
		model.save()
		.then(function(){
			return _this.store.find('post-list', {user_id:_this.get('currentUser').get('id')});
		})
		.then(function(record){
			_this.set('isProcessingDelete', false);
			var user = _this.get('currentUser'); 
			_this.transitionToRoute('profile', user);
		}, function(error){
			console.log("Error", error);
			_this.set('isProcessingDelete', false);
		});
	},

	savePost: function() {
		var _this = this;		
		var model = this.get('model');

		//Trim
		var body = this.get('editorialForQuill').trim();

		console.log("body", body);

		if(Ember.isEmpty(body)){
			body = " ";
		}
		model.set('body', body);

		//Get-Set the product status.
		model.set('product_status', this.get('product_status_options').get('selectedStatus').id);


 		//Model Validations:
		model.validate()
		.then(
			function validateSuccess(){
				_this.set('isProcessing', true);
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
				_this.set('showErrors', true);
				_this.set('openDrawer', true);
		});
	},



	actions: {

		deletePost: function() {
			this.deletePost();
		},

		showDeleteModal: function(){
			var _this = this;
			this.set('showDeleteModal', true);
			Ember.run.later(function(){
				_this.set('animateDeleteModal', true);
			},100);
		},

		closeDeleteModal: function(){
			var _this = this;
			this.set('animateDeleteModal', false);
			Ember.run.later(function(){
				_this.set('showDeleteModal', false);
			},300);
		}, 


		showImageModal: function(){
			var _this = this;
			this.set('showImageModal', true);
			Ember.run.later(function(){
				_this.set('animateImageModal', true);
			},100);
		},

		closeImageModal: function(){
			var _this = this;
			this.set('animateImageModal', false);
			Ember.run.later(function(){
				_this.set('showImageModal', false);
			},300);
		}, 

		closeModal: function() { 
			var _this = this;
			var model = this.get('model'); 
			this.set('animateClose', true);
			this.transitionToRoute('profile.post', model.get('user'), model); 
		}, 

		savePost: function() { 
			this.savePost();
		},

		//Click "imageClick" in UI
		imageClick: function(event) {
			var image = event.get('image');
			this.toggleImageSelected(image);
		},

		refresh: function(image) {
			this.toggleImageSelected(image);			
		},

		quillChange: function(text) { 
			this.set('editorialForQuill', text);
		},

		btnDrawer: function() {
			this.toggleProperty('openDrawer');
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
    	}
	}
});