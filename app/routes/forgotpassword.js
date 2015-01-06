import Ember from 'ember';

//FORGOT PASSWORD: 
var ForgotpasswordRoute = Ember.Route.extend({
	controllerName: "forgotpassword",
	renderTemplate: function() {
		this.render('layouts/header_anon', {
			into: 'application',
			outlet: 'header'
		});
		this.render('auth/forgot_password');
	},
	beforeModel: function() {
		this.controllerFor('forgotpassword').reset();
	}
});
export default ForgotpasswordRoute;