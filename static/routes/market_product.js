/**
	Single Market Product View
**/
Haul.MarketProductRoute = Haul.AnonRoute.extend({
	
	controllerName: "market-product",

	model: function(params) {
		var market_id = this.modelFor('market').id;
		var product_id = params.product_slug;
		var id = product_id + market_id;
		var data = {'market_id':market_id, 'product_id':product_id};
		var promiseArray = this.store.find('market-product', data);

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