import Ember from 'ember';
var $ = Ember.$; 
import config from '../../../config/environment';
var Haul = config.APP;

export default Ember.ObjectController.extend({
	createMode: null,
	modelProduct: null,
	productImagesBinding: "model.product.images",
	currentUserBinding: 'Haul.currentUser',
	currentUserIdBinding: 'Haul.currentUser.id',
	isProcessing: false,
	
	showProduct: true,
	showPost: false,
	showImages: false,
	imagesAreSelected: false,
	
	imagesBlank: '',
	totalImages: 5,

	userImages: [],
	productImageIds: [],
	selectedImages: [],

	editorialForQuill: "",

	reset: function(){
		console.log("RESET")
		this.set('selectedImages', []);
		this.set('productImageIds', []);
		this.set('totalImages', 5);
		this.set('imagesBlank', '');
		this.set('showProduct', true);
		this.set('showPost', false);
		this.set('showImages', false);
		this.set('isProcessing', false);
		this.set('imagesAreSelected', false);
		this.set('editorialForQuill', '');
		if(this.get('userImages')){
			this.get('userImages').forEach(function(img) {
				img.set('isSelected', false);
			});	
		} 
	},

	setup: function() { 
		if( !this.get('model').id ){  
			this.set('showImages', true);
			this.set('createMode', true);
		}else{
			this.set('createMode', false);
		}
	}.observes('model'),


	setUpQuill: function() {
		if( this.get('model').get('editorial') ){
			this.set('editorialForQuill', this.get('model').get('editorial'));
		}
	}.observes('model'),

	/* Get and set the current user's image upload gallery. */
	setUserImages: function() {
		var _this = this;
		if( this.get('currentUserId')){
			this.store.find('user-image', {user_id: this.get('currentUserId') } )
			.then(function(results){
				_this.set('userImages', results);
			});	
		}
	}.observes('model', 'currentUserId'),

	/* Get and set the products images. */
	setSelectedImages: function() {
		var _this = this;	
		if( Ember.isEmpty(_this.get('userImages')) ){
			return;
		}

		if( Ember.isEmpty(_this.get('productImages')) ){
			return;
		}

		//What images does this product have?
		this.get('productImages').then(function(productImages){	
			var objects = [];
			productImages.forEach(function(productImg){
				_this.get('userImages').forEach(function(userImg) {
					if(productImg.get('id') === userImg.get('id')) {
						userImg.set('isSelected', true);
						objects.pushObject(userImg);
					}
				});
			});
			
			_this.set('selectedImages', objects); 

		});
	}.observes('productImages.@each', 'userImages.@each', 'model'),


	blankImages: function() {		

		var c = this.get('totalImages') - this.get('selectedImages').length;
		var h = '<ul class="sortable ui-sortable">';
		for( var i=0; i<c; i++){
			h += '<li><div class="sort-item-wrapper"><img class="thumbnail haul-thumb item" src="/assets/images/blank-thumb.jpg"></div></li>';
		}
		h += '</ul>';	
		this.set('imagesBlank', h);	 
	}.on('init').observes('selectedImages.@each', 'model'),


	//Observer: anytime our array of selected images changes, update
	// our list of image_ids.
	imagesIdsChanged: function() {
		var ids = this.get('selectedImages').map(function(image) {
			return image.get('id');
		});
		this.set('productImageIds', ids); 

		//Highlight the image:
		if( this.get('productImageIds').length === 0 ) {
			this.set('imagesAreSelected', false);
		}else{
			this.set('imagesAreSelected', true);
		}
 
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


	savePost: function() {
		var _this = this;
		var user = this.get('currentUser');
		var product = this.get('modelProduct');
		var model = this.get('model');

		//Create?
		if(!model.id){
			var id = user.get('collection').get('id') + "-" + product.get('id');
			model.set('id', id);
			model.set('product', product);
			model.set('collection', user.get('collection'));
		}
		
		model.save()
		.then(function(){
			_this.set('isProcessing', false);
			_this.transitionToRoute('seller.product', model.get('collection'), model.get('product').get('id'), model.get('product').get('slug'));
		}, function(error){
			return error;
		});
	},

	saveProduct: function() {
		var _this = this;
		var modelProduct = this.get('modelProduct');
		
		modelProduct.set('image_ids', this.get('productImageIds'));

		//Refresh the image models. Get data from api.
		this.get('productImageIds').forEach(function(id){
			var img = _this.store.find('image', id );
			img.then(function(i) {
				i.reload();
			});
		});

		modelProduct.save().then(
			function() { 
				_this.set('isProcessing', false);
				_this.set('showProduct', false);
				_this.set('showPost', true);		
			},
			function(error){
				_this.set('isProcessing', false);	
				_this.set('errorShow', true);
				_this.set('errorMessage', Haul.errorMessages.get(error.status));
				console.log("Error" , error);
				return error;
			}
		);
	},



	actions: {

		showPost: function() {
			this.set('showProduct', false);
			this.set('showPost', true);	
		},

		showProduct: function() {
			this.set('showProduct', true);
			this.set('showPost', false);	
		},

		toggleImages: function() {
			this.set('showImages', !this.get('showImages'));
		},

		cancel: function() {
			var model = this.get('model');
			if( model.get('id')){
				this.transitionToRoute('seller.product', model.get('collection'), model.get('product').get('id'), model.get('product').get('slug'));
			}else{
				this.transitionToRoute('seller', this.get('currentUser').get('collection'));
			}
		},

		saveProduct: function() {
			this.set('isProcessing', true);

			var _this = this;
			var modelProduct = this.get('modelProduct');

			//Trim
			if( modelProduct.get('description') ){
				modelProduct.set('description', modelProduct.get('description').trim());
			}
			if( modelProduct.get('name') ){
				modelProduct.set('name', modelProduct.get('name').trim());
			}

	 		//Model Validations:
			modelProduct.validate().then(function(){
				_this.saveProduct();	
			}, function(errors) {
				console.log('errors', errors);
				_this.set('isProcessing', false);
				_this.set('showErrors', true);
			});
		},

		savePost: function() { 
			
			this.set('isProcessing', true);

			var _this = this;
			var model = this.get('model');

			//Trim
			if( model.get('editorial') ) {
				model.set('editorial', model.get('editorial').trim());
			}

	 		//Model Validations:
			model.validate().then(function(){
				_this.savePost();	
			}, function() {
				_this.set('isProcessing', false);
				_this.set('showErrors', true);
			});
		},

		//Click "imageClick" in UI
		imageClick: function(event) {
			var image = event.get('image');
			var selectedImages = this.get('selectedImages'); 
			var found = false;

			selectedImages.forEach(function(result){
				if(result.get('id') === image.get('id')){
					found = true;
					return;
				}
			});

			//Only allow 5 images.
			if( selectedImages.length === 5 && !found ) {
				//Show our modal.
				$('#imagePickerModal').modal('show');
				return;
			//Remove
			} else if( found ) { 
				var objects = [];
				selectedImages.forEach(function(result){
					if( result.get('id') !== image.get('id')){
						objects.push(result);
					}
				});
				this.set('selectedImages', objects);

				event.set('isSelected',false); 

			//Add
			} else {
				selectedImages.pushObject(image);
				event.set('isSelected',true);
			}
		},

		refresh: function(response) {
			var user_id  = this.get('currentUserId');
			var store = this.store; 
			var _this = this;

			response.data.forEach( function(image){ 
				var record = store.push('user-image', {
					original: image.locations.original,
					small: image.locations.small,
					thumb: image.locations.thumb,
					caption: image.caption,
					locations: image.locations,
					user_id: user_id,
					id: image.image_id,
					created_at: image.created_at
				});  
				//record.set('isSelected', true);
				_this.get('userImages').unshiftObject(record);
			});				
		},

		quillChange: function(text) {
			var model = this.get('model');
			model.set('editorial', text);
		},
	}
});