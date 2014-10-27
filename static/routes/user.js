/**
	Single seller view 
		- Display seller's products
**/	
Haul.SellerRoute = Haul.AnonRoute.extend({
	model: function(params) {
		var _this = this;
		return this.store.find('user', params.user_slug).then(function(user){
			return user;
		}, function(error) {
			return _this.transitionTo('not-found');
		});
	},	
	serialize: function(model) {
 	   return { user_slug: model.get('id') };
 	}
});


Haul.SellerIndexRoute = Haul.AnonRoute.extend({
	model: function(params) {
		return this.modelFor('seller').get('products');
	},
 	setupController: function(controller, model) {
 		controller.set('user', this.modelFor('seller'));
 		controller.set('content', model);
 	},
	renderTemplate: function(){
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('seller/index');
	}
});


Haul.SellerNewMarketRoute = Haul.AuthenticatedRoute.extend({ 
	controllerName: "market-edit",
	model: function() {
		return this.store.createRecord('market');
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


Haul.SellerNewProductRoute = Haul.AuthenticatedRoute.extend({ 
	controllerName: "product-edit",
	//Get the users images from api.
	beforeModel: function(transition) {

		//Is Authorized
		this.controllerFor('product-edit').authorized(transition);

		var user = this.controllerFor('auth').get('currentUser');
		this.store.findQuery('image', user.get('id') );
		this.controllerFor('product-edit').reset();
	},
	model: function() {
		return this.get('store').all('image');
	},
 	setupController: function(controller, model) {
 		controller.reset();	 
 		controller.set('product', this.store.createRecord('product'));
    },
	renderTemplate: function(controller, model) {  
		this._super();
		this.render('product/edit', {
			into: 'application',
			outlet: 'main',
			controller: controller,
			model: model
		});
	}
});