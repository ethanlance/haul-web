import Ember from 'ember';
var $ = Ember.$; 
import config from '../../../config/environment';
var Haul = config.APP;

export default Ember.ObjectController.extend({

	
	modelProduct: null,
	productImagesBinding: "model.product.images",
	currentUserBinding: 'Haul.currentUser',
	currentUserIdBinding: 'Haul.currentUser.id',
	isProcessing: false,
	
	showPost: false,
	showProduct: false,
	showUpload: false,
	imagesAreSelected: false,

	productImageIds: [],
	selectedImages: [],

	editorialForQuill: "",


	state: null,
	states:{
		0:'showUpload', 
		1:'showProduct', 
		2:'showPost'
	},

	findState: function() {

		var _this = this;
		var state = this.get('newState'); 

		var states = this.get('states');

		var newKey = null;
		for(var key  in states) {
			if(states[key]===state){
				newKey = key;
			}
		}

		for(var key  in states) {
			var s = states[key];
			
			if(s===state){
				_this.set(s, true);
				_this.set(s+'OutRight', false);
				_this.set(s+'OutLeft', false);
			}else{
				if(key < newKey ){
					_this.set(s+'OutRight', false);
					_this.set(s+'OutLeft', true);
				}else{
					_this.set(s+'OutRight', true);
					_this.set(s+'OurLeft', false);
				}
				_this.set(s, false);
			}

			window.scrollTo(0,0);
		};

	}.observes('newState'),


	setup: function() { 
		console.log("SETUP", this.get('model'))
		if( !this.get('model').id ){  
			this.set('newState', 'showUpload');
		}else{
			this.set('newState', 'showPost');
		}
	}.observes('model'),

	setUpQuill: function() {
		if( this.get('model').get('editorial') ){
			this.set('editorialForQuill', this.get('model').get('editorial'));
		}
	}.observes('model'),


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
		
		return model.save()
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

		return modelProduct.save().then(
			function() { 
				_this.set('isProcessing', false);
				_this.set('showProduct', false);
				_this.set('newState', 'showPost');		
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

	selectImage: function(image) {
		var selectedImages = this.get('selectedImages'); 
		var found = false;

		selectedImages.forEach(function(result){
			if(result.get('id') === image.get('id')){
				found = true;
				return;
			}
		});

		if( found ) { 
			var objects = [];
			selectedImages.forEach(function(result){
				if( result.get('id') !== image.get('id')){
					objects.push(result);
				}
			});
			this.set('selectedImages', objects);

			//image.set('isSelected',false); 

		//Add
		} else {
			selectedImages.pushObject(image);
			//image.set('isSelected',true);
		}
	},


	actions: {

		showPost: function() {
			this.set('newState', 'showPost');
		},

		showProduct: function() {
			this.set('newState', 'showProduct');
		},

		showUpload: function() {
			this.set('newState', 'showUpload');
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

			if(Ember.isEmpty(model.get('editorial'))){
				model.set('editorial', " ");
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
			this.selectImage(image);
		},

		refresh: function(image) {
			this.selectImage(image);
			// var user_id  = this.get('currentUserId');
			// var store = this.store; 
			// var _this = this;

			// response.data.forEach( function(image){ 
			// 	var record = store.push('user-image', {
			// 		original: image.locations.original,
			// 		small: image.locations.small,
			// 		thumb: image.locations.thumb,
			// 		caption: image.caption,
			// 		locations: image.locations,
			// 		user_id: user_id,
			// 		id: image.image_id,
			// 		created_at: image.created_at
			// 	});  
				
			// 	_this.selectImage(record);
			// });				
		},

		quillChange: function(text) {
			var model = this.get('model');
			model.set('editorial', text);
		},
	}
});