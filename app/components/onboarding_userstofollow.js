import Ember from 'ember';
export default Ember.Component.extend({

	haulUser: null,

	users: [],

	currentUserIdBinding: "session.currentUser.id",

	
	didInsertElement: function() {
		this.start();
	},



	start: function() {

		var user = this.get('users');
		var currentUserId = this.get("currentUserId");
		
		//Get the @haul user data.
		var _this = this;
		var store = this.container.lookup('store:main'); 
		return store.find('user', 'haul').then(function(result){ 
			return result;
		})
		.then(function(user){

			_this.set('haulUser', user);

			//Now get what @haul likes.
			return store.find('user-likes-list', { 
				user_id: user.id, 
				limit: 10,
			});

		})
		.then(function(likes){

			var users = _this.get('users');

			//Now pull all the users from the list of likes.
			likes.forEach(function(result){

				result.get('post').then(function(post){

					post.get('user').then(function(user){

						if(user.id === currentUserId){
							user.set('isCurrentUser', true);
						}

						if( !users.contains(user) ){
							users.pushObject( user );
						}

					});
					
				});
				
			});

		});


	}.observes('currentUserId'),


});