import Ember from 'ember';
import ErrorMixin from '../mixins/server_error';
export default Ember.ObjectController.extend(ErrorMixin, {
	
	//Current user object.
	currentUserBinding: 'session.currentUser',
	
	//Current user id.
	currentUserIdBinding: 'session.currentUser.id',
	
	//Are we proccesing a submission.
	isProcessing: false,

	//Have images been selected?
	imagesAreSelected: Ember.computed.gte('productImageIds.length', 1),

	//Ready to edit product section?
	disableProductForm: Ember.computed.not('imagesAreSelected'),
	
	//Ready to edit post section?
	disablePostForm: true,
	
	product_status_options: null,
	
	//Selected image ids
	productImageIds: [],
	
	//Selected image objects
	selectedImages: [],
	
	//Default value of the quill text editor.
	editorialForQuill: "",

	//Has product name been entered?
	//hasProductName: Ember.computed.notEmpty('model.product_name'),

	//Has product description been entered?
	//hasProductDescription: Ember.computed.notEmpty('model.product_description'),

	//Has product price been entered?
	//hasProductPrice: Ember.computed.notEmpty('model.product_price'),

	//Has product quanity been entered?
	//hasProductQuantity: Ember.computed.notEmpty('model.product_quantity'),

	//Is product filled out and ready for validation?
	//productReadyForValidation: Ember.computed.and('hasProductName', 'hasProductDescription', 'hasProductPrice', 'hasProductQuantity'),

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

	modelChanged: function() {

		if( !Ember.isEmpty(this.get('model.product_name')) &&
			!Ember.isEmpty(this.get('model.product_description')) &&
			!Ember.isEmpty(this.get('model.product_price')) &&
			!Ember.isEmpty(this.get('model.product_quantity')) 
		){
			this.set('productReadyForValidation', true);
		} else {
			this.set('productReadyForValidation', false);
		}
		
	}.observes('model.product_name','model.product_description','model.product_price','model.product_quantity'),

	//Observe the product for completeness, and triggers validation on the product
	//before the user can advance to the post section.
	productChanged: function() {

		if( this.get('productReadyForValidation') ){
			var _this = this;
			var model = this.get('model');
			model.validate()
			.then(
				function valid(){
					_this.set('disablePostForm', false);
				},
				function invalid(errors){
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
			console.log("NOPPE")
			this.set('disablePostForm', true);
		}

	}.observes('productReadyForValidation'),


	start: function() {

		// var _this = this;
		// this.store.find('image', 'c3cfe0d0-c9e2-11e4-9189-bba69b9a959e')
		// .then(function(image){
		// 	_this.selectImage(image);
		// });

		var for_sale 		= {name: "for sale", id: 'FOR_SALE'};
		var sold 			= {name: "sold",    id: 'SOLD'};
		var not_for_sale 	= {name: "no longer for sale",    id: 'NOT_FOR_SALE'};
		this.set('product_status_options', Ember.ArrayController.create({
		  selectedStatus: for_sale,
		  status: [for_sale, sold, not_for_sale],
		})); 

	}.on('init'),

	setup: function() {  
		
		if( Ember.isEmpty(this.get('currentUser')) ){
			return;
		}

		this.get('model').setProperties(
			{
				'product_quantity':'1',
				'product_price':'0',
				'product_currency':'USD',
				'product_status': 'FOR_SALE',
				'user': this.get('currentUser')
			}
		);
		
	}.observes('currentUser'),


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

			//Handle to the saved post.
			_this.set('postRecord', postRecord);

			//Reload user's post-list
			return _this.store.find('post-list', {user_id:_this.get('currentUserId'), doNotPaginate:true});
		})
		.then(function(){

			//Reload user's feed list
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
			this.set('animateClose', true);
			//this.transitionToRoute('profile', this.get('currentUser'));
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