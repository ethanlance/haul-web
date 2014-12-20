
/**
	Single Product View
**/

Haul.ProductRoute = Haul.AnonRoute.extend({
	model: function(params) {
		if( params.product_slug === "product")
			return {};
		var _this = this;
		return this.store.find('product', params.product_slug).then(function(result){
			return result;
		}, function(error) {
			return _this.transitionTo('not-found');
		});;
	},
	serialize: function(model) {
		if(model)
    		return { product_slug: model.get('id') };
  	},
	
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
  	},
	renderTemplate: function(controller, model) {
		this.render('product/index');
		this._super(controller, model);
	}
});



//NEEDS AUTH
Haul.ProductEditRoute = Haul.AuthenticatedRoute.extend({ 
	needsAuthorization: true,
	controllerName: "product-edit",
	beforeModel: function(transition) {
		//Is Authorized
		//this.controllerFor('product-edit').authorized(transition);
		var user = this.controllerFor('auth').get('currentUser');
		this.controllerFor('product-edit').reset();
	},
	model: function() { 
		return this.modelFor('product');
	},
	setupController: function(controller, model) {
		controller.set('model', model);
	},
	renderTemplate: function(controller, model) {
		this.render('product/edit', {
			into: 'application',
			outlet: 'main',
			controller: controller,
			model: model
		});
		this._super(controller, model);
	}
});


//NEEDS AUTH
Haul.ProductNewRoute = Haul.AuthenticatedRoute.extend({ 
	needsAuthorization: true,
	controllerName: "product-edit",
	model: function() {  
		return this.store.createRecord('product');
	},
	renderTemplate: function(controller, model) {
		this.render('product/edit', {
			into: 'application',
			outlet: 'main',
			controller: controller,
			model: model
		});
		this._super(controller, model);
	}
});

