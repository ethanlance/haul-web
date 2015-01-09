import Ember from 'ember';

	var NotAuthorizedController = Ember.ObjectController.extend({
		currentUserBinding: 'Haul.currentUser',
	}); 
	export default NotAuthorizedController;