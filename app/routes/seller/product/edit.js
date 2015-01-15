import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
	beforeModel: function() {
		this.controllerFor('seller.product.edit').reset();
	},
	model: function() { 
		return this.modelFor('seller.product');
	},
	setupController: function(controller, model) {
  		controller.set('modelProduct', model.get('product'));
		controller.set('model', model);
	},
}); 