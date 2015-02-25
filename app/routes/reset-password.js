import Ember from 'ember';
import AnonMixin from '../mixins/anon';
export default Ember.Route.extend(AnonMixin, { 
	model: function() {
		return this.store.createRecord('authresetpassword');
	},
	beforeModel: function() {
		this.controllerFor('reset-password').reset();
	},
	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('reset-password');
	}
});