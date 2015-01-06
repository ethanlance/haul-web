import Ember from 'ember';
 
	var ApplicationController = Ember.ObjectController.extend({
		needs: ["auth"],  
		currentUser: Ember.computed.alias('controllers.auth.currentUser')
	}); 
	export default ApplicationController;