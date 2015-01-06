import Ember from 'ember';

/**
	Collection's Followers
	List of users who follow this user.
**/
export default Ember.Route.extend({
	controllerName: "collection-index",
	model: function() {
		return this.modelFor('collection');
	},
 	setupController: function(controller) {
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

