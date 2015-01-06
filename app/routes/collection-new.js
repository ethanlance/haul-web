import Ember from 'ember';

//NEEDS AUTH
export default Ember.Route.extend({ 
	controllerName: "collection.edit",
	beforeModel: function() { 
		this.controllerFor('collection.edit').reset();
	},
	model: function() { 
		return this.store.createRecord('collection');
	}, 
 	setupController: function(controller, model) {	
  		controller.set('content', model);
 	},
	renderTemplate: function(controller, model) {
		this.render(); //render application.hbs

		this.render('collection', {
			into: 'application',
			outlet: 'main'
		});
		
		this.render('collection.edit', {
			into: 'collection', 
			controller: controller,
			model: model
		});
	}
});