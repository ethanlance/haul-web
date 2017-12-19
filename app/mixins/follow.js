import Ember from 'ember';
import DirectMessageMixin from './dm';
export default Ember.Mixin.create( DirectMessageMixin, {

	currentUserBinding: "session.currentUser",
	
	currentUserIdBinding: "session.currentUser.id",

	userFollowsRecord: false,

	userFollows: false,

	followUser: null,
	
	followType: 'users',
	
	followIdBinding: 'followUser.id',

	followKey: Ember.computed('followId', 'followType', function() {
		return this.get('followId') + "-" + this.get('followType');
	}),


	/**
		Pass in a username the currentUser wants to follow.
		This was created to auto follow @haul (and other haul users)
		by the new currentUser at signup.
	**/
	setFollowByUsername: function(username, currentUserId, currentUsername){

		//In case the session has not been updated yet.
		//We can pass in the  currentUserId, currentUsername
		if( currentUserId ) {
			this.set('currentUserId', currentUserId);
			this.set('currentUsername', currentUsername);
		}

		var _this = this;
		var store = this.container.lookup("store:main");
		return store.find('user', username)
		.then(function(haul){
			//Follow Mixin
			_this.set('followId', haul.id);
			return _this.setFollow();
		});
	},


	/*
		Save follow/unfollow of a user by the currentUser.
	*/
	setFollow: function() {
		var _this = this;

		var record = this.get('userFollowsRecord'); 

		var store = this.container.lookup("store:main");

		var follow;
		
		if( record ){
			record.deleteRecord();
			follow = false;
		} else {
			record = store.createRecord('follow', {
				user_id: 	this.get('currentUserId'),
				ref_id: 	this.get('followId'), 
				ref_type: 	this.get('followType')
			});
			
			follow = true;
		}

		return record.save()
		.then(function(){

			//FOLLOW:
			if( follow ){
				_this.set('userFollowsRecord', record);
				_this.set('userFollows', true); 


				//Direct Message
				//Send a direct message to the person who is 
				//now being followed.
				_this.sendFollowingDm(_this.get('followId'));


			//UNFOLLOW
			}else{
				_this.set('userFollowsRecord', false);
				_this.set('userFollows', false); 
			}
				
			store.find('user-following-count', _this.get('currentUserId'))
			.then(function(r){
				r.reload();
			});

			store.find('user-following-list', {
				user_id:_this.get('currentUserId')
			});

			//Reload the user's feed.
			store.find('feed', {
				user_id: _this.get('currentUserId'),
				doNotPaginate: true
			});

			store.find('user-followers-count', _this.get('followId'))
			.then(function(r){
				r.reload();
			});

			store.find('user-followers-list', {user_id:_this.get('followId')});
			
		}, function(error){
			console.log("Error", error);
		});
	}
});