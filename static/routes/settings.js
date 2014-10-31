Haul.SettingsRoute = Haul.AnonRoute.extend({
	model: function(params) {
		var _this = this;
		var user = this.controllerFor('auth').get('currentUser');
		return this.store.find('user', user.get('id')).then(function(user){
			return user;
		}, function(error) {
			return _this.transitionTo('not-found');
		});
	},
	renderTemplate: function(controller, model) {  
		this._super();
		this.render('settings/index', {
			into: 'application',
			outlet: 'main',
			controller: controller,
			model: model
		});
	},
	setupController: function(controller, model) {
		controller.set('model', model);
	}
});