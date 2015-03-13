import Ember from 'ember';
import ErrorMixin from '../mixins/server_error';
export default Ember.ObjectController.extend(ErrorMixin, {
 
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
	errorMessageServer: "Oh no something went wrong",
	editorialForQuill: "",

	// refresh: function() {
	// 	this.setProperties({
	// 		selectedImages: [],
	// 	});
	// },

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
				var _s = s;
				Ember.run.later(function(){
					var key = _s+'FadeIn'; 
					_this.set(key, true);
				},100);

			}else{
				if(key < newKey ){
					_this.set(s+'OutRight', false);
					_this.set(s+'OutLeft', true);
				}else{
					_this.set(s+'OutRight', true);
					_this.set(s+'OurLeft', false);
				}
				_this.set(s, false);

				var key = _s+'FadeIn'; 
				_this.set(key, false);
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

		if(Ember.isEmpty(this.get('selectedImages'))){
			return; //bail
		}

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
		var body = model.getWithDefault('body','').trim();
		if(Ember.isEmpty(body)){
			body = " ";
		}
		model.set('body', body);

 		//Model Validations:
		model.validate()
		.then(
			function validateSuccess(){
				_this.set('isProcessing', true);
				return model.save();
			},
			function validateError(error){
				console.log("Error", error);
				_this.set('isProcessing', false);
				_this.set('showErrors', true);
			}
		)
		.then(function(){
			return _this.store.find('post-list', {user_id:_this.get('currentUserId'), doNotPaginate:true});
		})
		.then(function(){
			return _this.store.find('feed', {user_id:_this.get('currentUserId'), doNotPaginate:true});
		})
		.then(
			function serverSuccess(record){
				_this.set('isProcessing', false);
				var user = _this.get('currentUser'); 
				_this.transitionToRoute('profile.post', user, model);
			}, 
			function serverError(error){
				_this.set('isProcessing', false);
				
				//Mixin:
				_this.handleServerError(error)

			}
		);
	},

	actions: {

		showPost: function() {
			console.log('showpost')
			var _this = this;
			var model = this.get('model');
			
			//Run validations before proceeding.
			model.validate()
			.then(
				function(){
					console.log('forward')
					_this.set('newState', 'showPost');
				},
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
			console.log('showproduct')
			this.set('newState', 'showProduct');
		},

		showUpload: function() {
			console.log('showphoto')
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