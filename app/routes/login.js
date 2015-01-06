import Ember from 'ember';

// AUTH
//Login Form 
var LoginRoute = Ember.Route.extend({
	
	model: function() {
		return this.store.createRecord('authlogin');
	},
	renderTemplate: function() {
		this.render('layouts/header_anon', {
			into: 'application',
			outlet: 'header'
		});
		this.render('login');
	},
	beforeModel: function() {
		this.controllerFor('login').reset();
	}
});
export default LoginRoute;