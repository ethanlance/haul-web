import Ember from 'ember';

//NEEDS AUTH
var ProductNewRoute = Ember.Route.extend({ 
	needsAuthorization: true,
	controllerName: "product-edit",
	model: function() {  
		return this.store.createRecord('product');
	},
	renderTemplate: function(controller, model) {
		this.render('product/edit', {
			into: 'application',
			outlet: 'main',
			controller: controller,
			model: model
		});
		this._super(controller, model);
	}
});
export default ProductNewRoute;