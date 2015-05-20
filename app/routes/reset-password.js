import Ember from 'ember';
export default Ember.Route.extend({ 

	metaTitle: function() {
		return "Reset Password";
	}.property(),	

	model: function() {
		return this.store.createRecord('authresetpassword');
	},
	beforeModel: function() {
		this.controllerFor('reset-password').reset();
	},
	renderTemplate: function() {
		this.render('layouts/header_anon', {
			into: 'application',
			outlet: 'header'
		});
		this.render('reset-password');
	}
});