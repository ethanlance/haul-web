import Ember from 'ember';
import ApplicationRoute from './../application';

/**
	USER INDEX - Default view
	List of user's collections
**/
var SellerIndexRoute = ApplicationRoute.extend({
	model: function() { 
		return this.modelFor('seller');
	},
 	setupController: function(controller, model) {
 		controller.set('user', this.modelFor('seller'));
 		controller.set('content', model); 
 	}
});
export default SellerIndexRoute;
