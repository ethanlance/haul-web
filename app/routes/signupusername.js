import AnonMixin from '../mixins/anon';
export default Ember.Route.extend(AnonMixin, {
	controllerName: 'settings.username',
	model: function() {
		return this.store.createRecord('username');
	},
	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('signupusername');
	}
});
