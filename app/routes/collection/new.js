import Ember from 'ember';
 
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
		this.render('collection/edit', {
			into: 'application',
			outlet: 'main',
			controller: controller,
			model: model
		});
		this._super(controller, model);
	}
}); 