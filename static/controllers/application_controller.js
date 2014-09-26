(function() {
	Haul.ApplicationController = Ember.Controller.extend({
		
		needs: ['auth'],
		
		currentUser: (function() {
			return this.get('controllers.auth.currentUser');
		}).property('controllers.auth.currentUser'),
		
		isAuthenticated: (function() {
			return !Ember.isEmpty(this.get('controllers.auth.currentUser'));
		}).property('controllers.auth.currentUser')
	});
}).call(this);