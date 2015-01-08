import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('authlogin');
	},
	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('login');
	},
	beforeModel: function() {
		this.controllerFor('login').reset();
	}
}); 