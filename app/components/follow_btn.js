import Ember from 'ember';

import DirectMessageMixin from '../mixins/dm';
export default Ember.Component.extend( DirectMessageMixin, {
	
	userFollows: false,
	
	buttonText: Ember.computed('userFollows', function() {
		if( this.get('userFollows') ) {
			return "following";
		} else {
			return "follow";
		}
	}), 
	
	userFollowsRecord: false,
	
	currentUserBinding: "session.currentUser",
	
	currentUserIdBinding: "session.currentUser.id",

	followUser: null,
	
	followType: 'users',
	
	followIdBinding: 'followUser.id',

	followKey: Ember.computed('followId', 'followType', function() {
		return this.get('followId') + "-" + this.get('followType');
	}),
	

	currentUserNotEmpty: Ember.computed.notEmpty('currentUserId'),

	followUserNotEmpty: Ember.computed.notEmpty('followId'),

	idsAreReady: Ember.computed.and('followUserNotEmpty', 'currentUserNotEmpty'),

	notFollowingSelf: Ember.computed("currentUserId", "followId", function() {
		if( this.get('currentUserId') === this.get('followId') ){
			return false;
		}else{
			return true;
		}
	}),

	readyToStart: Ember.computed.and('notFollowingSelf', 'idsAreReady'),

	showButton: Ember.computed.bool('readyToStart'),

 	startComponent: function() {

		if( !this.get('readyToStart') ){
			return;
		}

		var _this = this;
		
		var store = this.container.lookup("store:main");
		
		var key = this.get('followKey');

		store.find('follow', key)
		.then(function(record){
			if(!Ember.isEmpty(record)){
				//if(_this.get('userFollows')){
					_this.set('userFollows', true);
					_this.set('userFollowsRecord', record);
				//}
			}
		}, function(error) {
			_this.set('userFollowsRecord', false);
			_this.set('userFollows', false);
		});
		
	}.on('didInsertElement').observes('readyToStart'),

	actions: {	

		buttonClick: function() { 

			var _this = this;

			var record = this.get('userFollowsRecord'); 

			var store = this.container.lookup("store:main");

			var follow;
			
			if( record ){
				record.deleteRecord();
				follow = false;
			} else {
				record = store.createRecord('follow', {
					user_id: this.get('currentUserId'),
					ref_id: this.get('followId'), 
					ref_type: this.get('followType')
				});
				
				follow = true;
			}

			record.save()
			.then(function(){

				//FOLLOW:
				if( follow ){
					_this.set('userFollowsRecord', record);
					_this.set('userFollows', true); 

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
	}
});