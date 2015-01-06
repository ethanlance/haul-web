import Ember from 'ember';

/**
	Users products for sale
**/
var SellerProductsRoute = Ember.Route.extend({
	model: function() {
		return this.modelFor('seller').get('products');
	},
 	setupController: function(controller, model) {

 		console.log("HERE", this.modelFor('seller'));

 		controller.set('user', this.modelFor('seller'));
 		controller.set('content', model);
 	}, 
	renderTemplate: function(controller, model) {
		this.render('seller/products');
		this._super(controller, model);
	}
});
export default SellerProductsRoute;