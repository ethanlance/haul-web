import Ember from 'ember';   
export default Ember.ObjectController.extend({ 

	user: null,

	canDM: false,

 	currentUserIdBinding: 'session.currentUser.id',
	
	userIdBinding: 'user.id',

	start: function() {

		var userId = this.get('userId');
		var currentUserId = this.get('currentUserId');

		if( userId === currentUserId ) {
			
			this.set('canDM', false);

		} else {
			this.set('canDM', true);
		}



	}.on('init').observes('userId', 'currentUserId'),


});