import Ember from 'ember';
export default Ember.Component.extend({

	users: [],

	storeName: 'user-likes-list',

	usersReady: Ember.computed.notEmpty('users'),

	currentUserIdBinding: "session.currentUser.id",

	limit:20,

	usernameFilter: 'haul',

	userFilter: null,
	
	start: function() {
		
		var usernameFilter = this.get('usernameFilter');
		if(!usernameFilter){ return; }

		//Get the @haul user data.
		var _this = this;
		var store = this.container.lookup('store:main'); 
		return store.find('user', usernameFilter).then(function(user){ 
			_this.set('userFilter', user);
		});

	}.on('didInsertElement').observes('usernameFilter'),

	userChanged: function() {
		
		var user = this.get('userFilter');
		if(Ember.isEmpty(user)) { return; }
		
		this.set('users', [])
		var users = this.get('users');	
		var _this = this;
		var store = this.container.lookup('store:main');
		
		store.find(this.get('storeName'), {user_id: user.id, limit:this.get('limit')})
		.then(function(likes) { 
			likes.forEach(function(like) {
				like.get('post').then(function(post){ 

					post.get('user').then(function(user){

						if( Ember.isArray(users) && !users.contains(user) && users.length < _this.get('limit')){
							users.pushObject( user );	
					 	}
					});
				});
			});
		});

	}.observes('userFilter')
});