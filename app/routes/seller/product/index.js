import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() { 
		var user = this.get('currentUser'); 
		this.store.find('user-collection', {user_id:user.id});
	},
	model: function() { 
		return this.modelFor('seller.product');
	},
  	setupController: function(controller, model) {
  		controller.set('model', model ); 
  	}
});