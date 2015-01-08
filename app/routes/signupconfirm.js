import Ember from 'ember';

var SignupconfirmRoute = Ember.Route.extend({
	controllerName: "signupconfirm",
	model: function() {
		return this.store.createRecord('authconfirmation');
	},
	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('signup_confirm');
	},
	beforeModel: function() {
		this.controllerFor('signupconfirm').reset();
	}
});
export default SignupconfirmRoute;