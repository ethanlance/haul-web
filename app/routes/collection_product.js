import AnonRoute from './common';
import AuthenticatedRoute from './common';

/**
	Single Collection Product View
**/
var CollectionProductRoute = AnonRoute.extend({

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
export default CollectionProductRoute;

var CollectionProductIndexRoute = AnonRoute.extend({ 

	controllerName: "collection-product-index", 

 	setupController: function(controller) {	
  		controller.set('model', this.modelFor('collection-product') );
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
export default CollectionProductIndexRoute;

var CollectionProductEditRoute = AuthenticatedRoute.extend({ 
	
	controllerName: "collection-product-edit",

	needsAuthorization: true,

	model: function() {
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
export default CollectionProductEditRoute;
