import Ember from 'ember';
export default Ember.ObjectController.extend({ 

	repost: false, //the new Repost
	model: false, //Original Post
	postBinding:'model',
	postIdBinding: 'model.id',
	postUserIdBinding: 'model.user_id',

	currentUserBinding: "session.currentUser",
	currentUserIdBinding: "session.currentUser.id",
	editorialForQuill: " ",

	showModal: false,
	postComplete:false,

	start: function() {

		var currentUserId = this.get('currentUserId');
		var postUserId = this.get('postUserId');
		var post = this.get('post');

		if(Ember.isEmpty(post.get('id')) ||  Ember.isEmpty(this.get('model'))){
			console.log("Bail", this.get('model'));
			console.log("Bail", this.get('post'));
			return;
		}

		var repost;
		if( currentUserId === postUserId ) {
			repost = this.store.createRecord('repost-myself');
		}else{
			repost = this.store.createRecord('repost-someone-else');
		}

		//First clone the post model and call it repost.
		repost.setProperties(post.getProperties(
			['subject',
			'product_name',
            'product_description',
            'product_currency',
            'product_price',
            'product_quantity',
            'product_images',
            'product_status']
		));
		repost.setProperties({
			'id': null,
			'user_id': currentUserId,
			'repost_id': post.get('post_id'),
			'repost_user_id': post.get('user').get('id'),	
		});

		this.set('repost', repost);

	}.observes('postId'),

	savePost: function() {
		this.set('isProcessing', true);

		var _this = this;
		var repost = this.get('repost');

console.log("IMAGES", repost.get('product_images'));

		var productImages = repost.get('product_images').map(function(image) {
			return image.get('id');
		});
		var imageId = productImages[0];

 		var body = repost.get('body').trim();
 		var subject = repost.get('subject').trim();

		if(Ember.isEmpty(repost.get('body'))){
			repost.set('body', " ");
		}
	
		if(Ember.isEmpty(repost.get('subject'))){
			repost.set('body', post.get('subject'));
		}

		repost.setProperties({
			'product_image_ids': productImages,
			'image_id': imageId,
			'body': body,
			'subject': subject,
			'product_currency': 'usd'
		});

		repost.validate()
		.then(function(){
			return repost.save();
		})
		.then(function(){
			return _this.store.find('post-list', {user_id:_this.get('currentUserId')});
		})
		.then(function(){
			_this.set('isProcessing', false);
			_this.set('postComplete', true);
		}, function(error){
			console.log("Error", error);
			_this.set('isProcessing', false);
			_this.set('showErrors', true);
		});
	},

	showProduct:false,
	actions: {

		showProduct:function(){
			this.set('showProduct', true);
		},

		close: function() {
			return this.send('closeModal');
		},

		quillChange: function(text) {
			this.get('repost').set('body', text);
		},
 
		savePost: function() { 
			this.savePost();
		}
	}
});