import Ember from 'ember';

/**
	User's Followers
	List of users who follow this user.
**/
var SellerFollowersRoute = Ember.Route.extend({
	model: function() {
		var user_id = this.modelFor('seller').get('id');
		return this.store.find('user-followers-list', user_id);
	},
 	setupController: function(controller, model) {
 		controller.set('user', this.modelFor('seller'));
 		controller.set('content', model);
 	}, 
	renderTemplate: function(controller, model) {
		this.render('seller/followers');
		this._super(controller, model);
	}
});
export default SellerFollowersRoute;
