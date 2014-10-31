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
		return this.modelFor('market').get('products');
	},
 	setupController: function(controller, model) {
 		controller.set('market', this.modelFor('market'));

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
		console.log("YOU ARE HERE?")
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
