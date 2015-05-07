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

	product_status_options: null,
	
	//Selected image ids
	productImageIds: [],
	
	//Selected image objects
	selectedImages: [],

	//Does current user need to fill out the seller account form?
	needsSellerAccount: false,
	
	//Default value of the quill text editor.
	editorialForQuill: "",

	editorialForBody: "",

	showErrors: false,

	triggerEditorResize: false,

	animateClose:false,

	show_one: true,

	show_two: false,

	show_three: false,

	showChanged: function() {
		this.set('show_one', false);
		this.set('show_two', false);
		this.set('show_three', false);
		this.set('show_'+this.get('show'), true);

		//Scroll the modal to top again
		var el = $('.modal')
		el.scrollTop(0,0);

	}.observes('show'),


	stepTwoChanged: function() {

		this.doTagInjection();

		var _this = this;
		Ember.run.later(function(){
			_this.set('triggerEditorResize', true);
		}, 300);

	}.observes('step_two'),
	
	start: function() {

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

		this.set('show', 'one');
		this.set('selectedImages', []);
		this.set('showErrors', false); 

		this.get('model').setProperties(
			{
				'product_quantity':'1',
				'product_currency':'USD',
				'product_status': 'FOR_SALE',
				'user': this.get('currentUser')
			}
		);
		
	}.observes('currentUser', 'model'),


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

	showErrorsChanged: function() {
		if(this.get('showErrors')){
			this.set('showErrorBar', true);

			var _this = this;
			Ember.run.later(function() {
				_this.set('showErrorBar', false);
			}, 1000);

		}
	}.observes('showErrors'),

	//Observe the product for completeness, and triggers validation on the product
	//before the user can advance to the post section.
	validateProduct: function() {
		
		if( Ember.isEmpty(this.get('selectedImages')) ) {
			this.set('showImageError', true);
			this.set('showErrors', true); 
			return;
		}


		var _this = this;
		var model = this.get('model');
		model.validate()
		.then(
			function valid(){
				_this.set('show', "two");
				_this.set('showErrors', false);
			},
			function invalid(errors){


				if( errors.get('product_name').length > 0 ||
					errors.get('product_description').length > 0 ||
					errors.get('product_price').length > 0 ||
					errors.get('product_quantity').length > 0 || 
					errors.get('product_shipping').length > 0 || 
					errors.get('product_status').length > 0 ){
						_this.set('showErrors', true);
				}else{
					_this.set('show', "two");
					_this.set('showErrors', false);
				}
			}
		);
		
	},




	//Observer: anytime our array of selected images changes, update
	// our list of image_ids.
	imagesIdsChanged: function() {

		if(Ember.isEmpty(this.get('selectedImages'))){
			return; //bail
		}

		this.set('showImageError', false);

		var ids = this.get('selectedImages').map(function(image) {
			return image.get('id');
		});
		this.set('productImageIds', ids); 

		//Set the images on the model.
		var model = this.get('model');
		model.set('product_image_ids', this.get('productImageIds')); 
		model.set('image_id', this.get('productImageIds')[0]); 


		//If the post body has no content, then add the main image as content.
		var model = this.get('model');
		var body = model.get('body');
		
		if( Ember.isEmpty(body) ){
			this.doImageInjection();
		}

	}.observes('selectedImages.@each'),

	doImageInjection: function() {

		var image = this.get('selectedImages')[0];	
		this.set('setEditorImgSrc', image.get('small') );

	},

	doTagInjection: function() {

		var model = this.get('model');
		var body = model.get('body');
		var tags = model.get('tags');
		
		if( !Ember.isEmpty(tags) ){

			tags = tags.split(",");

			var str = "";
			tags.forEach(function(tag){
				tag = tag.trim();

				var tagW = tag.split(" ");
				if(tagW.length > 1) {
					tag = "";
					for(var i=0; i<tagW.length; i++){
						tag = tag+tagW[i];
					}
				}

				if( tag ) {
					str += " #" + tag + " ";
				}
			});

			this.set('setEditorText', str);			 
		}

	},

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
		var body = this.get('editorialForBody').trim();
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
		.then(function(){

        	return _this.store.find('seller', _this.get('currentUserId')).then(
            	function success(record){

	                if(Ember.isEmpty(record)  ||  record.get('isDirty') ) {
	                    _this.set('needsSellerAccount', true);
	                }

            	}
            );
        })
		.then(
			function success(record){
				var user = _this.get('currentUser');

				_this.set('isProcessing', false); 

				_this.set('show', "three");
				
			}, 
			function fail(error){

				//Mixin:
				_this.handleServerError(error)

				_this.set('showErrors', true);

				_this.set('isProcessing', false);
			}
		);
	},

	transitionToPost: function() {
		this.set('animateClose', true);
		
		var username = this.get('currentUser').get('username');

		var post = this.get('postRecord'); 

		this.transitionToRoute('profile.post', username, post );
	},



	actions: { 

		sellerAccountSaved: function() {
			this.transitionToPost();
		},

		goToPost: function() {
			this.transitionToPost();
		},

		back: function() {
			this.set('show', "one");
		},

		next: function() {
			this.validateProduct();
		},

		close: function() {
			this.set('animateClose', true);
		},

		cancel: function() {
			this.set('animateClose', true);
		},
	
		savePost: function() { 
			this.set('isProcessing', true);
			this.set('requestEditorContents', true);
		},

		quillChange: function(text) { 
			this.set('editorialForBody', text); 
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

		descriptionChange: function(text) { 
			var model = this.get('model');
			model.set('product_description', text);	
		}
	}
});