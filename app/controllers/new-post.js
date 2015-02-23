import Ember from 'ember';
export default Ember.ObjectController.extend({
 
 	needs: ['profile'],
	
	productImages: null,
	
	currentUserBinding: 'Haul.currentUser',
	currentUserIdBinding: 'Haul.currentUser.id',
	isProcessing: false,
	
	showPost: false,
	showProduct: false,
	showUpload: false,
	imagesAreSelected: false,
	product_status_options: null,
	imageId: null,
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

		for(key  in states) {
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
		}

	}.observes('newState'),

	start: function() {

		var for_sale 		= {name: "for sale", id: 'FOR_SALE'};
		var sold 			= {name: "sold",    id: 'SOLD'};
		var not_for_sale 	= {name: "no longer for sale",    id: 'NOT_FOR_SALE'};
		var product_status_options = Ember.ArrayController.create({
		  selectedStatus: for_sale,
		  status: [for_sale, sold, not_for_sale],
		}); 
		this.set('product_status_options', product_status_options); 

	}.on('init'),

	setup: function() {  
		
		if( Ember.isEmpty(this.get('model')) || Ember.isEmpty(this.get('currentUser')) ){
			return;
		}

		this.get('model').set('product_quantity', '1');
		this.get('model').set('product_price', '0');
		this.get('model').set('product_currency', 'USD');
		this.get('model').set('product_status', 'FOR_SALE');
		this.get('model').set('user', this.get('currentUser'));

		this.set('newState', 'showUpload');
		var _this = this;
		Ember.run.later(function() {_this.set('showImagePicker', true)}, 500);
	}.observes('model', 'currentUser'),


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

		//Set the images on the model.
		var model = this.get('model');
		model.set('product_image_ids', this.get('productImageIds')); 
		model.set('image_id', this.get('productImageIds')[0]); 
 
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
		//Add
		} else {
			selectedImages.pushObject(image);
		}
	},

	savePost: function() {
		var _this = this;
		var model = this.get('model');

		//Trim
		var body = model.get('body').trim();
		if(Ember.isEmpty(body)){
			body = " ";
		}
		model.set('body', body);

 		//Model Validations:
		model.validate()
		.then(function(){
			_this.set('isProcessing', true);
			return model.save();
		})
		.then(function(record){
			_this.set('isProcessing', false);
			var user = _this.get('currentUser'); 
			_this.transitionToRoute('profile.post', user, record.get('post_id'), record.get('post_slug'));
		}, function(error){
			console.log("Error", error);
			_this.set('isProcessing', false);
			_this.set('showErrors', true);
		});
	},

	actions: {

		showPost: function() {
			
			var _this = this;
			var model = this.get('model');

			//Get-Set the product status.
			model.set('product_status', this.get('product_status_options').get('selectedStatus').id);
			
		
			
			//Run validations before proceeding.
			model.validate()
			.then(
				function(){},
				function(errors){
					if( errors.get('product_name').length > 0 ||
						errors.get('product_description').length > 0 ||
						errors.get('product_price').length > 0 ||
						errors.get('product_quantity').length > 0 || 
						errors.get('product_status').length > 0 ){
						console.log('errors', errors);
						_this.set('showErrors', true);
					}else{
						console.log('forward')
						_this.set('newState', 'showPost');
					}
				}
			);
		},

		showProduct: function() {
			this.set('newState', 'showProduct');
		},

		showUpload: function() {
			this.set('newState', 'showUpload');
		},

		cancel: function() {
			this.transitionToRoute('profile', this.get('currentUser'));
		},
	
		savePost: function() { 
			this.savePost();
		},

		imageClick: function(event) {
			var image = event.get('image');
			this.selectImage(image);
		},

		imageDelete: function(event) {
			this.selectImage(event);
		},

		refresh: function(image) {
			this.selectImage(image);			
		},

		quillChange: function(text) {
			var model = this.get('model');
			model.set('body', text);
		}
	}
});