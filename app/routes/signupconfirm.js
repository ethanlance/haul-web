import Ember from 'ember';
import AnonMixin from '../mixins/anon';
export default Ember.Route.extend(AnonMixin, {
	controllerName: "signupconfirm",
	model: function() {
		return this.store.createRecord('authconfirmation');
	},
	setupController: function(controller, model){ 
		controller.reset();
		this._super(controller, model);
	},
	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('signupconfirm');
	}
});