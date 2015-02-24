import Ember from 'ember';

export default Ember.Component.extend({

	postIdBinding: "post.post_id",
	postKeyBinding: "post.id",
	currentUserIdBinding: "session.currentUser.id",
	totalBinding: "post.likesCount.total",
	userLikes: false,
	userLikesRecord: false,


	didInsertElement: function() {
		var store = this.container.lookup("store:main");
		var _this = this;

		//Skip if user is anon.
		if(!this.get('currentUserId')){
			return;
		}
		
		_this.set('userLikes', false);
		_this.set('userLikesRecord', false); 
		
		//currentUser like item?
		store.find('like', this.get('postId'))
		.then(function(uLike){
			if(!Ember.isEmpty(uLike)){
				_this.set('userLikes', true);
				_this.set('userLikesRecord', uLike); 
			}else{
			}
		});
	},//.on('init').observes('postId'),



	actions: {
		btnClick: function() { 

			//Anon?
			if(!this.get('currentUserId')){
				this.sendAction('loginModal');
				return;
			}

			var _this = this;
			var record = this.get('userLikesRecord'); 
			var store = this.container.lookup("store:main");

			var like;
			if( record ){
				record.deleteRecord();
				like = false;
			} else {
				var data = {
					user_id: this.get('currentUserId'),
					post_id: this.get('postId')
				};
				record = store.createRecord('like', data);
				like = true;
			}

			record.save()
			.then(function(result){ 

				if( like ){
					_this.set('userLikes', true);
					_this.set('userLikesRecord', record);
					_this.incrementProperty('total');
				}else{
					_this.set('userLikes', false);
					_this.set('userLikesRecord', null);
					_this.decrementProperty('total');
				}

				store.find('user-likes-count', _this.get('currentUserId'))
				.then(function(r){
					r.reload();
				});

				store.find('user-likes-list', _this.get('currentUserId'))
				.then(function(r){
					r.reload();
				});

				store.find('post-likes-count', _this.get('postId'))
				.then(function(r){
					r.reload();
				});
				
			}, function(error){
				console.log("Error", error);
			});
		}
	}
});