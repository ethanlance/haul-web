import Ember from 'ember';

	var NotFoundController = Ember.ObjectController.extend({
		needs: ["auth"],  
		currentUser: Ember.computed.alias('controllers.auth.currentUser')
	}); 	
	export default NotFoundController;