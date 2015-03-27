import Ember from 'ember';

export default Ember.Component.extend({

	postIdBinding: "post.post_id",
	postUserIdBinding: "post.user.id",
	postKeyBinding: "post.id",
	currentUserIdBinding: "session.currentUser.id",
	totalBinding: "post.likesCount.total",
	userLikes: false,
	userLikesRecord: false,
	userLikeListRecord:false,

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
	},//.on('init').observes('postId'),



	actions: {
		btnClick: function() { 

			//Intercept if user is anonymous:
			if( !this.get('currentUserId')){
				this.sendAction('openModal', 'loginmodal', {});
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
					// //Like
					// if(_this.get('userLikeListRecord')){
					// 	_this.get('userLikeListRecord').userLike.rollBack();	
					// }
					
					_this.set('userLikes', true);
					_this.set('userLikesRecord', record);
					_this.incrementProperty('total');
				}else{

					//Unlike
					_this.set('userLikes', false);
					_this.set('userLikesRecord', null);
					_this.decrementProperty('total');

					// store.filter('user-likes-list', function(userLike){
					// 	if(userLike.get('id') === _this.get('postKey')){
					// 		userLike.deleteRecord();
					// 		//userLike.save();

					// 		_this.set('userLikeListRecord', userLike);
					// 	}

					// })

				}

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