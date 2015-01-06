import Ember from 'ember';

/**
	User's Likes
	Products this user has liked.
**/
var SellerLikesRoute = Ember.Route.extend({
	model: function() {
		var user_id = this.modelFor('seller').get('id');
		return this.store.find('user-likes-list', user_id);
	},
 	setupController: function(controller, model) {
 		controller.set('user', this.modelFor('seller'));
 		controller.set('content', model);
 	}, 
	renderTemplate: function(controller, model) {
		this.render('seller/likes');
		this._super(controller, model);
	}
});
export default SellerLikesRoute;