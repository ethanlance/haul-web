import Ember from 'ember';
import FollowMixin from '../mixins/follow';
export default Ember.Component.extend( FollowMixin, {

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

	buttonText: Ember.computed('userFollows', function() {
		if( this.get('userFollows') ) {
			return "following";
		} else {
			return "follow";
		}
	}), 

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

			//Mixin:
			this.setFollow();

		}
	}
});