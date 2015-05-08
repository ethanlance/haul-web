import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) { 
		var _this = this; 
		return this.store.find('user', params.username).then(function(result){ 
			return result;
		}, function(error) {
			console.log("ERROR... do transition.")
			_this.transitionTo('not_found');
			return false;
		});
	},
	setupController: function(controller, model) {
		controller.set('model', model);
		this._super(controller, model);
	}, 
	serialize: function(model) {  
  		return { username: model.username };
  	},
	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('profile');
	},
});