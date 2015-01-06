import Ember from 'ember'; 

 
var ForgotpasswordconfirmRoute = Ember.Route.extend({
	controllerName: "forgotpasswordconfirm",
	model: function() {
		return this.store.createRecord('authresetpassword');
	},
	renderTemplate: function() {
		this.render('layouts/header_anon', {
			into: 'application',
			outlet: 'header'
		});
		this.render('auth/forgot_password_confirm');
	},
	beforeModel: function() {
		this.controllerFor('forgotpasswordconfirm').reset();
	}
});
export default ForgotpasswordconfirmRoute;
