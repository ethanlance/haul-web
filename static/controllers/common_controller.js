(function () {
	'use strict'; 
	Haul.ApplicationController = Ember.ObjectController.extend({
		needs: ["auth"],  
		currentUser: Ember.computed.alias('controllers.auth.currentUser')
	}); 

	Haul.NotFoundController = Ember.ObjectController.extend({
		needs: ["auth"],  
		currentUser: Ember.computed.alias('controllers.auth.currentUser')
	}); 	

	Haul.NotAuthorizedController = Ember.ObjectController.extend({
		needs: ["auth"],  
		currentUser: Ember.computed.alias('controllers.auth.currentUser')
	}); 

	Haul.HomeController = Ember.ObjectController.extend({
		needs: ["auth"], 
		currentUser: Ember.computed.alias('controllers.auth.currentUser'),
	});
})();