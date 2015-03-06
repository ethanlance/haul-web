import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) { 
		var _this = this; 
		return this.store.find('user', params.username).then(function(result){ 
			return result;
		}, function() {
			return _this.transitionTo('not-found');
		});
	},
	setupController: function(controller, model) {
		controller.set('model', model);
		this._super(controller, model);
	}
});