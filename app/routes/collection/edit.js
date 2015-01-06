import Ember from 'ember';

var CollectionEditRoute = Ember.Route.extend({ 
	controllerName: "collection.edit",
	beforeModel: function() {
		this.controllerFor('collection.edit').reset();
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
export default CollectionEditRoute;

