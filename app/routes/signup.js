import AnonRoute from './anon';
export default AnonRoute.extend({
	model: function() {
		return this.store.createRecord('authsignup');
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
		this.render('signup');
	}
});