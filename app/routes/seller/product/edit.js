import Ember from 'ember';
 
export default Ember.Route.extend({ 
	beforeModel: function() {
		//Is Authorized
		//this.controllerFor('product-edit').authorized(transition);
		//var user = this.controllerFor('auth').get('currentUser');
		this.controllerFor('seller.product.edit').reset();
	},
	model: function() { 
		return this.modelFor('seller.product');
	},
	setupController: function(controller, model) {
		controller.set('model', model);
	},
}); 