
//NEEDS AUTH
Haul.ProductEditRoute = Haul.AuthenticatedRoute.extend({ 
	controllerName: "product-edit",
	
	needsAuthorization: true,

	//Get the users images from api.
	beforeModel: function(transition) {

		//Is Authorized
		this.controllerFor('product-edit').authorized(transition);

		var user = this.controllerFor('auth').get('currentUser');
		this.store.findQuery('image', user.id );
		this.controllerFor('product-edit').reset();
	},
	model: function() { 
		return this.get('store').all('image');
	},
 	setupController: function(controller, model) {
 		controller.reset();	
        controller.set('productPromise', this.store.find('product', this.modelFor('product').get('id')));
    },
	renderTemplate: function(controller, model) {
		this.render('product/edit', {
			into: 'application',
			outlet: 'main',
			controller: controller,
			model: model
		});
	}
});




/**
	Single Product View
**/
Haul.ProductRoute = Haul.AnonRoute.extend({
	model: function(params) {
		return this.store.find('product', params.product_slug);
	},
	serialize: function(model) {
    	return { product_slug: model.get('id') };
  	},
  	setupController: function(controller, model) {
  		controller.set('model', model );
  	}
});