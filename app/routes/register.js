import Ember from 'ember';
export default Ember.Route.extend( {
	
	model: function() {
		return this.store.createRecord('authconfirmation');
	},
	setupController: function(controller, model){ 
		controller.reset();
		this._super(controller, model);
	},
	renderTemplate: function() {
		this.render('layouts/header_anon', {
			into: 'application',
			outlet: 'header'
		});
		this.render('register');
	}
});