import Ember from 'ember';
import ErrorMixin from '../../../mixins/server_error';
export default Ember.ObjectController.extend(ErrorMixin, {
 
 	needs: ['profile'],

 	requestEditorContents: false,

 	currentPageBinding: 'controllers.profile.currentPage',

	productUserIdBinding: "model.product_user.id",
	
	product_status_options: null,
	
	currentUserBinding: 'session.currentUser',

	currentUserIdBinding: 'session.currentUser.id',
	
	isProcessing: false,

	isProcessingDelete: false,
	
	imagesAreSelected: false,
	
	showDeleteModal: false,
	
	animateDeleteModal: false,
	
	selectedImages: [],
	
	deletedImages: [],
	
	animateClose:false,

	prevModelId: false,

	modelIdBinding: 'model.id',

	productImages: null,

	currentModelIdBinding: 'model.id',

	isForSaleOffsite: Ember.computed.equal('model.product_status', "FOR_SALE_OFFSITE"),


	/*
		Set all our states back to default.
	*/
	reset: function() {
		console.log("....REST")
		this.setProperties({
			showImageUploadError: false,
			imageUploadError: "",
			selectedImages: [],
			showDeleteModal: false,
			isProcessing: false,
			isProcessingDelete: false,
			showErrors: false,
			productImages: null
		})
	},


	/*
		Observe if the model changes to another model. Controllers are singletons, so we need to let it know
		when we're editing a new model.
	*/
	startModelChanged: function() {
		
		if( this.get('prevModelId') && this.get('prevModelId') !== this.get('currentModelId')  ){
			this.reset();
		}

		this.set('prevModelId', this.get('currentModelId'));

		this.set('productImages', this.get('model.product_images'));

		this.setupStatusDropown();

	}.observes('currentModelId'),


	/*
		Setup the status dropdown for products that are not offsite.
	*/
	setupStatusDropown: function() {
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
	},



	/*
		Enforce numbers only
	*/
	prevPrice: null,
	prevShipping: null,
	priceCleaner: function(){
		var model = this.get('model');

		//Product Price
		if( model.get('product_price') && model.get('product_price') !== this.get('prevPrice') ) {
			model.set('product_price', this.get('product_price').replace(/\D/g,''))
			this.set('prevPrice', model.get('product_price'));
		}

		//Product Shipping
		if( model.get('product_shipping') &&  model.get('product_shipping') !== this.get('prevShipping') ) {
			model.set('product_shipping', this.get('product_shipping').replace(/\D/g,''))
			this.set('prevShipping', model.get('product_shipping'));
		}
		
	}.observes('model.product_shipping','model.product_price'),

	/* 
		Get and set the products images. 
	*/
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


	/*
		Observer: anytime our array of selected images changes, update
		our list of image_ids.
	*/
	imagesIdsChanged: function() {

		if( Ember.isEmpty(this.get('selectedImages')) ){
			return;
		}

		var ids = this.get('selectedImages').map(function(image) {
			return image.get('id');
		}); 
		//Set the images on the model.
		var model = this.get('model');

		model.set('product_image_ids', ids); 
		

	}.observes('selectedImages.@each'),

	/*
		Preserves the drag sort order of the images.
	*/
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
	},

	
	saveProduct: function() {
		var _this = this;		
		var model = this.get('model');

		this.set('isProcessing', true);
 

		//Get-Set the product status.
		if( this.get('isForSaleOffsite') ) {
			model.setProperties({
				'product_status': "FOR_SALE_OFFSITE",
				'product_quantity': 1,
				'product_shipping': 0,
			});
		}else{
			model.set('product_status', this.get('product_status_options').get('selectedStatus').id);	
		}
		

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
				_this.handleServerError(error);
				_this.set('showErrors', true);
				_this.set('openDrawer', true);
		});
	},


	/*
		Catch all the actions.
	*/
	actions: {

		close: function() {
			this.set('animateClose', true);
		},

		cancel: function() {
			this.set('animateClose', true);
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