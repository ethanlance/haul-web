/**
	Single Collection Product View
**/
Haul.CollectionProductRoute = Haul.AnonRoute.extend({
	
	controllerName: "collection-product",

	model: function(params) {
		var collection_id = this.modelFor('collection').id;
		var product_id = params.product_slug;
		var id = product_id + collection_id;
		var data = {'collection_id':collection_id, 'product_id':product_id};
		var promiseArray = this.store.find('collection-product', data);

		return promiseContent = promiseArray.then(function(results){ 
			return results.get('content');
		})
		.then(function(content){ 
			return content.get('firstObject');
		});
	},
	serialize: function(model) {
    	return { product_slug: model.get('id') };
  	},
  	setupController: function(controller, model) {
  		controller.set('model', model );
  	}
});