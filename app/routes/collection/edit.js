import Ember from 'ember';
 
export default Ember.Route.extend({  
	beforeModel: function() {
		this.controllerFor('collection.edit').reset();
	},
	model: function() {
		return this.modelFor('collection');
	}
});

