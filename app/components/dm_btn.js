import Ember from 'ember';
import FollowMixin from '../mixins/follow';
export default Ember.Component.extend( FollowMixin, {

	toIdBinding: 'to.id',

	currentUserBinding: "session.currentUser",
	
	currentUserIdBinding: "session.currentUser.id",

	currentUserNotEmpty: Ember.computed.notEmpty('currentUserId'),

	toUserNotEmpty: Ember.computed.notEmpty('toId'),

	idsAreReady: Ember.computed.and('toUserNotEmpty', 'currentUserNotEmpty'),

	notFollowingSelf: Ember.computed("currentUserId", "followId", function() {
		if( this.get('currentUserId') === this.get('toId') ){
			return false;
		}else{
			return true;
		}
	}),

	readyToStart: Ember.computed.and('notFollowingSelf', 'idsAreReady'),

	showButton: Ember.computed.bool('readyToStart'),

	
	actions: {
		buttonClick: function() {
			this.sendAction('goToRoute', 'profile.dm', this.get('toId') );
		}
	}


});