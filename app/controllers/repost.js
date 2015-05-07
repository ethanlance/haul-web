import Ember from 'ember';
import ErrorMixin from '../mixins/server_error';
export default Ember.ObjectController.extend(ErrorMixin, {

	//Original Post
	model: null, 

	currentUserBinding: "session.currentUser",
	
	currentUserIdBinding: "session.currentUser.id",

	editorialForBody: "",
	
	selectedImages: [], 

	requestEditorContents: false,

	showSuccess:false,
	
	showRepost:false,

	repostBody: "",

	started: false,

	// The post model has been sent to this controller.  Now make a repost clone model of it.
 	modelReady: function() {

		if( this.get('started') || Ember.isEmpty(this.get('model').get('id')) || Ember.isEmpty(this.get('currentUser').get('id')) ){
			return
		} 
		this.set('started', true); 

		this.set('selectedImages', []);
		this.set('showSuccess', false);
		this.set('showRepost', false);

		var currentUserId = this.get('currentUser').get('id');
		var post = this.get('model');
		var postUserId = post.get('userId');

		var repost = this.store.createRecord('repost');

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
			'body': "",
			'user_id': currentUserId,
			'repost_id': post.get('post_id'),
			'repost_user_id': post.get('user').get('id'),	
		});

 		
		var obj = [];	
		post.get('product_images').forEach(function(image){
			obj.push(image);
		});
		this.set('selectedImages', obj);


		this.makeRepostBody();


		//Override the previous model.
		this.set('model', repost);
		this.imagesIdsChanged();
	
		//Switch model.
		this.set('showRepost', true);


	}.observes('model', 'currentUser'),



	makeRepostBody: function() {

		var image = this.get('selectedImages')[0];

		var text = "[img " + image.id + "]";

		this.set('repostBody', text);

	},
	


	//Observer: anytime our array of selected images changes, update
	// our list of image_ids.
	imagesIdsChanged: function() {

		var ids = this.get('selectedImages').map(function(image) {
			return image.id;
		}); 
		//Set the images on the repost.		

		var model = this.get('model');
		model.set('product_image_ids', ids); 
		model.set('image_id', ids[0]); 

	},




	savePost: function() {
		var _this = this;		
		var repost = this.get('model');

	
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
			console.log("FAILED", error);
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