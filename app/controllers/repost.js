import Ember from 'ember';
export default Ember.ObjectController.extend({ 

	model: false,
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

		if(Ember.isEmpty(post.get('id')) ||  !Ember.isEmpty(this.get('model'))){
			console.log("Bail");
			return;
		}

		var repost;
		if( currentUserId === postUserId ) {
			repost = this.store.createRecord('repost-myself');
		}else{
			repost = this.store.createRecord('repost-someone-else');
		}	


console.log("MAKE THE MODEL");

		//First clone the post model and call it repost.
		this.set('repost', repost);
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

		this.set('model', repost);

		console.log("REPOST", repost);
		console.log("REPOST", repost.get('product_images'));

	}.observes('postId'),

	savePost: function() {
		this.set('isProcessing', true);

		var _this = this;
		var model = this.get('model');

console.log("IMAGES", model.get('product_images'));

		var productImages = model.get('product_images').map(function(image) {
			return image.get('id');
		});
		var imageId = productImages[0];

 		var body = model.get('body').trim();
 		var subject = model.get('subject').trim();

		if(Ember.isEmpty(model.get('body'))){
			model.set('body', " ");
		}
	
		if(Ember.isEmpty(model.get('subject'))){
			model.set('body', post.get('subject'));
		}

		model.setProperties({
			'product_image_ids': productImages,
			'image_id': imageId,
			'body': body,
			'subject': subject,
			'product_currency': 'usd'
		});

		model.validate()
		.then(function(){
			return model.save();
		})
		.then(function(){
			return store.find('post-list', _this.get('currentUserId'));
		})
		.then(function(record){
			return record.reload();
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

	actions: {

		close: function() {
			return this.send('closeModal');
		},

		quillChange: function(text) {
			this.get('model').set('body', text);
		},
 
		savePost: function() { 
			this.savePost();
		}
	}
});