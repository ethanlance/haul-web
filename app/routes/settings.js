import AnonRoute from './common';

var SettingsRoute = AnonRoute.extend({
	model: function() {
		var _this = this;
		var user = this.controllerFor('auth').get('currentUser');
		return this.store.find('user', user.get('id')).then(function(user){
			return user;
		}, function() {
			return _this.transitionTo('not-found');
		});
	},	
	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('settings');
	},
	setupController: function(controller, model) {
		controller.set('model', model);
	}
});
export default SettingsRoute;