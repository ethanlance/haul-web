import Ember from 'ember';
import ErrorMixin from '../mixins/server_error';
export default Ember.ObjectController.extend(ErrorMixin, {
 
 	needs: ['profile'],
	
	productImages: null,
	
	currentUserBinding: 'Haul.currentUser',
	
	currentUserIdBinding: 'Haul.currentUser.id',
	
	isProcessing: false,
	
	postSubmitFailed: false,

	imagesAreSelected: false,

	disableProductForm: Ember.computed.not('imagesAreSelected'),
	
	disablePostForm: true,
	
	product_status_options: null,
	
	imageId: null,
	
	productImageIds: [],
	
	selectedImages: [],
	
	errorMessageServer: "Oh no something went wrong",
	
	editorialForQuill: "",



	//Prepopulate the post.subject with the value of post.product_name
	prevProductName: '',
	subjectChanged: function() {
		var prevProductName = this.get('prevProductName');
		var product_name = this.get('model.product_name');
		var subject =	this.get('model.subject');
		if( (Ember.isEmpty(subject) && !Ember.isEmpty(product_name))  ||  prevProductName === subject ) {
			this.get('model').set('subject', product_name);
		}
		this.set('prevProductName', product_name);
	}.observes('model.product_name'),


	//Observe the product for completeness:
	productChanged: function() {
		var product_name = this.get('model.product_name');
		var product_description = this.get('model.product_description');
		var product_price = this.get('model.product_price');
		var product_quantity = this.get('model.product_quantity');

		if( 
			!Ember.isEmpty(product_name) &&
			!Ember.isEmpty(product_description) &&
			!Ember.isEmpty(product_price) &&
			!Ember.isEmpty(product_quantity)
		){
			
			var _this = this;
			var model = this.get('model');
			model.validate()
			.then(
				function(){
					_this.set('disablePostForm', false);
				},
				function(errors){
					if( errors.get('product_name').length > 0 ||
						errors.get('product_description').length > 0 ||
						errors.get('product_price').length > 0 ||
						errors.get('product_quantity').length > 0 || 
						errors.get('product_status').length > 0 ){
							_this.set('showErrors', true);
							_this.set('disablePostForm', true);
					}else{
						_this.set('disablePostForm', false);
					}
				}
			);
		} else {
			this.set('disablePostForm', true);
		}

	}.observes('model.product_name', 'model.product_description', 'model.product_price', 'model.product_quantity'),



	start: function() {

		// var _this = this;
		// this.store.find('image', 'c3cfe0d0-c9e2-11e4-9189-bba69b9a959e')
		// .then(function(image){
		// 	_this.selectImage(image);
		// });

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
		this.set('isProcessing', true);
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
		.then(function(){
			return model.save();
		})
		.then(function(postRecord){
			_this.set('postRecord', postRecord);
			return _this.store.find('post-list', {user_id:_this.get('currentUserId'), doNotPaginate:true});
		})
		.then(function(){
			return _this.store.find('feed', {user_id:_this.get('currentUserId'), doNotPaginate:true});
		})
		.then(
			function success(record){
				var user = _this.get('currentUser');

				_this.transitionToRoute('profile.post', user, _this.get('postRecord'))
				.then(function() {
					_this.set('isProcessing', false);
					_this.set('animateClose', true);
				});
			}, 
			function fail(error){

				//Mixin:
				_this.handleServerError(error)

				_this.set('showErrors', true);
				_this.set('isProcessing', false);
			}
		);
	},

	animateClose:false,
	actions: {

		close: function() {
			this.set('animateClose', true);
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