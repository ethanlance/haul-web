import Ember from 'ember';
 
	var ApplicationController = Ember.ObjectController.extend({
		needs: ["auth"],  
		currentUserBinding: 'Haul.currentUser',
	}); 
	export default ApplicationController;