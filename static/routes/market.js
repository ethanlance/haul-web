/**
	Single STORE view 
		- Display seller's products
**/	
Haul.MarketRoute = Haul.AnonRoute.extend({
	model: function(params) {
		return this.store.find('market', params.market_slug);
	},	
	serialize: function(model) {
 	   return { market_slug: model.get('id') };
 	}
});


Haul.MarketIndexRoute = Haul.AnonRoute.extend({
	model: function(params) {
		return this.modelFor('market').get('products').then(function(products){
			return products;
		});
	},
 	setupController: function(controller, model) {	

 		controller.set('market', this.modelFor('market'));

 		//Filter this market's market-product-list records.
 		//This way when products are added/removed the filter is
 		//bound to the view.
 		var market_id = this.modelFor('market').id;
 		this.store.find('market-product-list', {market_id: market_id})
 		var filter = this.store.filter('market-product-list', function(mpl) {
 			if( mpl.get('market_id') === market_id )
 				return  mpl;
 		});

 		controller.set('model', filter);

 		controller.set('fakeProducts', this.store.find('product-fixture'));

 	},
	renderTemplate: function(){
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('market/index');
	}
});


Haul.MarketEditRoute = Haul.AuthenticatedRoute.extend({ 
	controllerName: "market-edit",
	model: function() {
		return this.modelFor('market');
	},
	renderTemplate: function(controller, model) {  
		this._super();
		this.render('market/edit', {
			into: 'application',
			outlet: 'main',
			controller: controller,
			model: model
		});
	}
});
