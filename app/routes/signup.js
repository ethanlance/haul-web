import Ember from 'ember';

//Sign Up Form 
var SignupRoute = Ember.Route.extend({
	controllerName: "signup",
	model: function() {
		return this.store.createRecord('authsignup');
	},
	renderTemplate: function() {
		this.render('layouts/header_anon', {
			into: 'application',
			outlet: 'header'
		});
		this.render('signup');
	},
	beforeModel: function() {
		this.controllerFor('signup').reset();
	}
});
export default SignupRoute;