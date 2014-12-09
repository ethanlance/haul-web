/**
	Single STORE view 
		- Display seller's products
**/	
Haul.CollectionRoute = Haul.AnonRoute.extend({
	model: function(params) {
		return this.store.find('collection', params.collection_slug);
	},	
	serialize: function(model) {
 	   return { collection_slug: model.get('slug') };
 	}
});


Haul.CollectionIndexRoute = Haul.AnonRoute.extend({ 

 	setupController: function(controller, model) {	
  		controller.set('collection', this.modelFor('collection'));
 	},
	renderTemplate: function(){
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('collection/index');
	}
});


Haul.CollectionEditRoute = Haul.AuthenticatedRoute.extend({ 
	controllerName: "collection-edit",
	model: function() {
		return this.modelFor('collection');
	}, 
	renderTemplate: function(controller, model) {  
		this._super();
		this.render('collection/edit', {
			into: 'application',
			outlet: 'main',
			controller: controller,
			model: model
		});
	}
});
