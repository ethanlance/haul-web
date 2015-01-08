import Ember from 'ember';

//FORGOT PASSWORD: 
export default Ember.Route.extend({
	controllerName: "forgotpassword",
	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('forgot_password');
	},
	beforeModel: function() {
		this.controllerFor('forgotpassword').reset();
	}
});