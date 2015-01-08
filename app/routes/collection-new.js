import Ember from 'ember';
 
export default Ember.Route.extend({ 
	controllerName: "collection.edit",
	model: function() { 
		return this.store.createRecord('collection');
	}, 
 	setupController: function(controller, model) {	
  		controller.reset();
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