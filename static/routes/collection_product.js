/**
	Single Collection Product View
**/
Haul.CollectionProductRoute = Haul.AnonRoute.extend({
	
	controllerName: "collection-product",

	model: function(params) { 
		var collection_id = this.modelFor('collection').id;
		var product_id = params.product_slug; 
		var key = collection_id + '-' + product_id; 
		return this.store.find('collection-product', key);
	},

	serialize: function(model) {
    	return { product_slug: model.get('id') };
  	}, 
});

Haul.CollectionProductIndexRoute = Haul.AnonRoute.extend({ 

	controllerName: "collection-product-index", 

 	setupController: function(controller, model) {	
  		controller.set('model', this.modelFor('collection-product') );
  		controller.set('collections', this.store.find('product-collection-list', this.modelFor('collection-product').get('product').get('id') ) );
 	},
	renderTemplate: function(controller, model){ 
		this._super();
		this.render('collection-product/index', {
			into: 'application',
			outlet: 'main',
			controller: controller,
			model: model
		});
	}
});

Haul.CollectionProductEditRoute = Haul.AuthenticatedRoute.extend({ 
	
	controllerName: "collection-product-edit",

	needsAuthorization: true,

	model: function(params) {
		return this.modelFor('collection-product');
	},

  	renderTemplate: function(controller, model) {  
		this._super();
		this.render('collection-product/edit', {
			into: 'application',
			outlet: 'main',
			controller: controller,
			model: model
		});
	}
});
