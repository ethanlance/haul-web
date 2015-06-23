import Ember from 'ember';

export default Ember.Component.extend({

	postIdBinding: "post.post_id",
	
	postUserIdBinding: "post.user.id",
	
	postKeyBinding: "post.id",
	
	currentUserIdBinding: "session.currentUser.id",
	
	userLikes: false,
	
	userLikesRecord: false,
	
	userLikeListRecord:false, 

	totalBinding: "post.likesCount.total", 

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
		var key = this.get('postKey');
		store.find('like', key)
		.then(function(uLike){


			if(!Ember.isEmpty(uLike)){
				_this.set('userLikes', true);
				_this.set('userLikesRecord', uLike); 
			}else{
			}
		});
	},



	actions: {
		btnClick: function() { 

			//Intercept if user is anonymous:
			if( !this.get('currentUserId')){
				this.sendAction('openModal', 'login', {});
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
					key: this.get('postKey')
				};

				record = store.createRecord('like', data);
				like = true;
			}

			record.save()
			.then(function(record){ 


				if( like ){ 
					_this.set('userLikes', true);
					_this.set('userLikesRecord', record);
					_this.incrementProperty('total');

					//Post page users who like post.
					store.find('post-liked-by-list', {id: _this.get('postId') } )

				}else{

					//Unlike
					_this.set('userLikes', false);
					_this.set('userLikesRecord', null);
					_this.decrementProperty('total');

				}
				

				//Post page list of users who like the post:
				_this.set('like', like);
				store.filter('post-liked-by-list', function(result) {
					var like = _this.get('like');
					if(!like && result.id && (result.get('user.id') === _this.get('currentUserId')) && (result.get('post_id') === _this.get('postId'))) {	 
						store.unloadRecord(result);
					}
				});


				store.find('user-likes-list', {user_id: _this.get('currentUserId') } );

				store.find('user-likes-count', _this.get('currentUserId'))
				.then(function(r){
					r.reload();
				});

				store.find('post-likes-count', _this.get('postKey'))
				.then(function(r){
					r.reload();
				});
				
			}, function(error){
				console.log("Error", error);
			});
		}
	}
});