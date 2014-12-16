
/**
	Single Product View
**/

Haul.ProductRoute = Haul.AnonRoute.extend({
	model: function(params) {
		if( params.product_slug === "product")
			return {};
		return this.store.find('product', params.product_slug);
	},
	serialize: function(model) {
    	return { product_slug: model.get('id') };
  	},
	renderTemplate: function(controller, model) {
		this.render('product/product', {
			into: 'application',
			outlet: 'main',
			controller: controller,
			model: model
		});
		this._super(controller, model);
	}
});

Haul.ProductIndexRoute = Haul.AnonRoute.extend({
	beforeModel: function(transition) {
		//Get the users collections
		var user = this.controllerFor('auth').get('currentUser');
		this.store.find('user-collection', {user_id:user.id});
	},
	model: function(params) {
		return this.modelFor('product');
	},
  	setupController: function(controller, model) {
  		controller.set('model', model );
        controller.set('collections', this.store.find('product-collection-list', model.get('id') ) );
  	},
	renderTemplate: function(controller, model) {
		this.render('product/index', {
			into: 'product/product',
			outlet: 'product',
			controller: controller,
			model: model
		});
		this._super(controller, model);
	}
});



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
 		var product_id = this.modelFor('product').get('id');
        controller.set('productPromise', this.store.find('product', product_id));
    },
	renderTemplate: function(controller, model) {
		this.render('product/edit', {
			into: 'product/product',
			outlet: 'product',
			controller: controller,
			model: model
		});
		this._super(controller, model);
	}
});


//NEEDS AUTH
Haul.ProductNewRoute = Haul.AuthenticatedRoute.extend({ 
	controllerName: "product-edit",
	needsAuthorization: true,
	//Get the users images from api.
	beforeModel: function(transition) {

		//Is Authorized
		this.controllerFor('product-edit').authorized(transition);

		var user = this.controllerFor('auth').get('currentUser');
		this.store.findQuery('user-image', user.get('id') );
		this.controllerFor('product-edit').reset();
	},
	model: function() { 
		return this.get('store').all('user-image');
	},
 	setupController: function(controller, model) {
 		controller.reset();	 
 		controller.set('product', this.store.createRecord('product'));
    },
	renderTemplate: function(controller, model) {
		this.render('product/edit', {
			into: 'product/product',
			outlet: 'product',
			controller: controller,
			model: model
		});
		this._super(controller, model);
	}
});

