import Ember from 'ember';
 
export default Ember.Route.extend({ 
	model: function() {
		return this.modelFor('collection');
	},
 	setupController: function(controller) {
 		controller.set('collection', this.modelFor('collection'));
 	}
});

