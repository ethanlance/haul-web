import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
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