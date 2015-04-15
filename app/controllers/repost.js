import Ember from 'ember';
import ErrorMixin from '../mixins/server_error';
export default Ember.ObjectController.extend(ErrorMixin, {
	postIdBinding: 'model.id',

	repost: false, //the new Repost

	model: false, //Original Post
	
	//rename the original model to 'post' object.
	postBinding: 'model',

	currentUserBinding: "session.currentUser",
	
	currentUserIdBinding: "session.currentUser.id",
	
	editorialForQuill: " ",

	editorialForBody: "",
	
	selectedImages: [],

	//showModal: false,
	showSuccess:false,
	
	showRepost:false,
	

	// The post model has been sent to this controller.  Now make a repost clone model of it.
 	postReady: function() {
		this.set('canEditProduct', false);
		if(Ember.isEmpty(this.get('post')) || Ember.isEmpty(this.get('currentUser')) ){
			return
		} 

		this.set('selectedImages', []);
		this.set('showSuccess', false);
		this.set('showRepost', false);

		var currentUserId = this.get('currentUser').get('id');
		var post = this.get('post');
		var postUserId = post.get('userId');

		var repost;
		repost = this.store.createRecord('repost');

		//First clone the post model and call it repost.
		repost.setProperties(post.getProperties(
			['subject',
			'product_name',
            'product_description',
            'product_currency',
            'product_price',
            'product_quantity',
            //'product_images',
            'product_status']
		));
		repost.setProperties({
			'id': null,
			'user_id': currentUserId,
			'repost_id': post.get('post_id'),
			'repost_user_id': post.get('user').get('id'),	
		});

		repost.set('body', '');
		var model = this.get('model');
		model.set('body', '');
		
 		//Clone Post:
		this.set('repost', repost);

		var obj = [];	
		this.get('post').get('product_images').forEach(function(image){
			obj.push(image);
		});
		this.set('selectedImages', obj);
	
		//Switch model.
		this.set('showRepost', true);
		this.setup();
	}.observes('post', 'currentUser'),

	setup: function() {
		this.set('canEditProduct', false);
		if( this.get('post').get('product_user') && this.get('post').get('product_user').get('id') === this.get('currentUser').get('id') ){
			this.set('canEditProduct', true);
		}

		var selectedStatus;
		var for_sale 		= {name: "for sale", id: 'FOR_SALE'};
		var sold 			= {name: "sold",    id: 'SOLD'};
		var not_for_sale 	= {name: "no longer for sale",    id: 'NOT_FOR_SALE'};
		var status = this.get('post').get('product_status');
		
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

	//Observer: anytime our array of selected images changes, update
	// our list of image_ids.
	imagesIdsChanged: function() {
			
		var repost = this.get('repost');
		if(!repost){
			return;
		}

		var ids = this.get('selectedImages').map(function(image) {
			return image.get('id');
		}); 
		//Set the images on the repost.		

		repost.set('product_image_ids', ids); 
		repost.set('image_id', ids[0]); 

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
		var repost = this.get('repost');

		
		var body = this.get('editorialForBody').trim();		
		if(Ember.isEmpty(body)){
			body = " ";
		}
		repost.set('body', body);
 
		//Get-Set the product status.
		repost.set('product_status', this.get('product_status_options').get('selectedStatus').id);
			

 		//Model Validations:
		repost.validate()
		.then(function(){
			_this.set('isProcessing', true);
			return repost.save();
		})
		.then(function(){
			return _this.store.find('post-list', {user_id:_this.get('currentUserId'), doNotPaginate:true});
		})
		.then(function(){
			return _this.store.find('feed', {user_id:_this.get('currentUserId'), doNotPaginate:true});
		})
		.then(function(record){
			_this.set('isProcessing', false);
			_this.set('showRepost', false);
			_this.set('showSuccess', true);
		}, function(error){
			//console.log("Error", error);
			_this.set('isProcessing', false);
			//Mixin:
				_this.handleServerError(error)
			_this.set('showErrors', true);
			_this.forceDrawerOpen();
		});
	},

	forceDrawerOpen: function() {
		var _this = this;
		this.set('openDrawer', true);
		Ember.run.later(function(){
			_this.set('animateDrawer', true);
		}, 100);
	},

	// showProduct:false,
	animateClose:false,
	actions: {

		goToFeed: function() {
			this.send('closeModal');
			this.transitionToRoute('profile', this.get('currentUser'));
		},

		close: function() {
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

		//Click "imageClick" in UI
		imageClick: function(event) {
			var image = event.get('image');
			this.selectImage(image);
		},

		refresh: function(image) {
			this.selectImage(image);			
		}, 

		showImageModal: function(){
			var _this = this;
			this.set('showImageModal', true);
			Ember.run.later(function(){
				_this.set('animateModal', true);
			},100);
		},

		closeImageModal: function(){
			var _this = this;
			this.set('animateModal', false);
			Ember.run.later(function(){
				_this.set('showImageModal', false);
			},300);
		}, 

		btnDrawer: function() {
			var _this = this;
			this.toggleProperty('openDrawer');
			Ember.run.later(function(){
				_this.toggleProperty('animateDrawer');
			}, 100)
			
		},

		updateSortOrder: function(i) {
			this.updateSortOrder(i);
		},


    	descriptionChange: function(text) { 
			var model = this.get('repost');
			model.set('product_description', text);	
		}
	}
});