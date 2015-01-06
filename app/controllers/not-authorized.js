import Ember from 'ember';

	var NotAuthorizedController = Ember.ObjectController.extend({
		needs: ["auth"],  
		currentUser: Ember.computed.alias('controllers.auth.currentUser')
	}); 
	export default NotAuthorizedController;