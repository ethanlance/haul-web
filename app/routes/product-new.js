import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: "seller.product.edit",
	model: function() {
		return this.store.createRecord('product');
	},
 	setupController: function(controller, model) {	
  		controller.reset();
  		this._super(controller, model);
 	},
	renderTemplate: function(controller, model) {
		this.render(); //render application.hbs

		this.render('product-new',{into:'application', outlet:'main'});
		
		this.render('seller.product.edit', {
			into: 'product-new', 
			controller: controller,
			model: model
		});
	}
});