import Ember from 'ember';
import ErrorMixin from '../mixins/server_error';
export default Ember.ObjectController.extend(ErrorMixin, {
	
	postIdBinding: 'model.id',

	//the new Repost
	repost: false, 

	//Original Post
	model: false, 
	
	//rename the original model to 'post' object.
	postBinding: 'model',

	currentUserBinding: "session.currentUser",
	
	currentUserIdBinding: "session.currentUser.id",
	
	editorialForQuill: " ",

	editorialForBody: "",
	
	selectedImages: [],

	setEditorImgSrc: false,

	//showModal: false,
	showSuccess:false,
	
	showRepost:false,

	repostBody: "",

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

		this.makeRepostBody();

	}.observes('post', 'currentUser'),

	makeRepostBody: function() {

		var image = this.get('selectedImages')[0];

		var text = "[img " + image.get('id') + "]";


		this.set('repostBody', text);


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




	savePost: function() {
		var _this = this;		
		var repost = this.get('repost');

		
		var body = this.get('editorialForBody').trim();		

		if(Ember.isEmpty(body)){
			body = " ";
		}
		repost.set('body', body);		

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
			
			_this.set('isProcessing', false);
			
			_this.handleServerError(error)
			
			_this.set('showErrors', true);
			
		});
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
		}
	}
});