import Ember from 'ember';

/**
	User Follows 
	List of users this user follows
**/
var SellerFollowsRoute = Ember.Route.extend({
	model: function() {
		var user_id = this.modelFor('seller').get('id');
		return this.store.find('user-follows-list', {id:user_id});
	},
 	setupController: function(controller, model) {
 		controller.set('user', this.modelFor('seller'));
 		controller.set('content', model);
 	}, 
	renderTemplate: function(controller, model) {
		this.render('seller/follows');
		this._super(controller, model);
	}
});
export default SellerFollowsRoute;
