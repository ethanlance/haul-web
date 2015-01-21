import AnonRoute from './anon';
export default AnonRoute.extend({
	controllerName: "forgotpasswordconfirm",
	model: function() {
		return this.store.createRecord('authresetpassword');
	},
	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('auth/forgot_password_confirm');
	},
	beforeModel: function() {
		this.controllerFor('forgotpasswordconfirm').reset();
	}
});