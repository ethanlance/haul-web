import Ember from 'ember';

	var NotFoundController = Ember.ObjectController.extend({
		currentUserBinding: 'session.currentUser',
	}); 	
	export default NotFoundController;