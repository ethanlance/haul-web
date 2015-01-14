import Ember from 'ember';
 
export default Ember.Route.extend({
	// beforeModel: function() { 
	// 	if( !Ember.isEmpty(Haul.get('currentUser')) ){
	// 		this.store.find('user-collection', {user_id: Haul.get('currentUser').id});
	// 	} 
	// },
	model: function() { 
		return this.modelFor('seller.product');
	},
  	setupController: function(controller, model) {
  		controller.set('model', model ); 
  	}
});