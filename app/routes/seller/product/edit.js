import Ember from 'ember';
 
export default Ember.Route.extend({ 
	beforeModel: function() {
		this.controllerFor('seller.product.edit').reset();
	},
	model: function() { 
		return this.modelFor('seller.product');
	},
	setupController: function(controller, model) {
		controller.set('model', model);
	},
}); 