import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: "seller.product.edit",
	model: function() {
		return this.store.createRecord('product');
	},
	renderTemplate: function(controller, model) {
		this.render(); //render application.hbs

		this.render('seller', {
			into: 'application',
			outlet: 'main'
		});
		
		this.render('seller.product.edit', {
			into: 'seller', 
			controller: controller,
			model: model
		});
	}
});