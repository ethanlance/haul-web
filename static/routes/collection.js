/**
	Single STORE view 
		- Display seller's products
**/	
Haul.CollectionRoute = Haul.AnonRoute.extend({
	model: function(params) {
		var _this = this;
		return this.store.find('collection', params.collection_slug).then(function(result){
			return result;
		}, function(error) {
			return _this.transitionTo('not-found');
		});
	},	
	serialize: function(model) {
 	   return { collection_slug: model.get('slug') };
 	}
});

Haul.CollectionIndexRoute = Haul.AnonRoute.extend({ 
	model: function(params) {
		var collection_id = this.modelFor('collection').get('id');
		return this.store.find('collection-product-list', {collection_id: collection_id});
 		// return this.store.filter('collection-product-list', function(mpl) {
 		// 	if( mpl.get('id') && mpl.get('collection_id') === collection_id) return true;
 		// });
	},
 	setupController: function(controller, model) {	
  		controller.set('collection', this.modelFor('collection'));
 	},
	renderTemplate: function(controller, model){
		this.render('collection/index', {
			into: 'application',
			outlet: 'main',
			controller: controller,
			model: model
		});
		this._super(controller, model);
	}
});



/**
	Collection's Followers
	List of users who follow this user.
**/
Haul.CollectionFollowersRoute = Haul.AnonRoute.extend({
	controllerName: "collection-index",
	model: function(params) {
		return this.modelFor('collection');
	},
 	setupController: function(controller, model) {
 		controller.set('collection', this.modelFor('collection'));
 	}, 
	renderTemplate: function(controller, model) {
		this.render('collection/followers', {
			into: 'application',
			outlet: 'main',
			controller: controller,
			model: model
		});
		this._super(controller, model);
	}
});


Haul.CollectionEditRoute = Haul.AuthenticatedRoute.extend({ 
	controllerName: "collection-edit",
	beforeModel: function() {
		this.controllerFor('collection-edit').reset();
	},
	model: function() {
		return this.modelFor('collection');
	}, 
	renderTemplate: function(controller, model) {  
		this.render('collection/edit', {
			into: 'application',
			outlet: 'main',
			controller: controller,
			model: model
		});
		this._super(controller, model);
	}
});


Haul.CollectionNewRoute = Haul.AuthenticatedRoute.extend({ 
	controllerName: "collection-edit",
	beforeModel: function() {
		this.controllerFor('collection-edit').reset();
	},
	model: function() {
		return this.store.createRecord('collection');
	}, 
 	setupController: function(controller, model) {	
  		controller.set('content', model);
 	},
	renderTemplate: function(controller, model) {
		this.render('collection/edit', {
			into: 'application',
			outlet: 'main',
			controller: controller,
			model: model
		});
		this._super(controller, model);
	}
});