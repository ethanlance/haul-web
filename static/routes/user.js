/**
	Single seller view 
		- Display seller's products
**/	
Haul.SellerRoute = Haul.AnonRoute.extend({
	model: function(params) { 
		var _this = this; 
		return this.store.find('user', params.user_slug).then(function(result){
			return result;
		}, function(error) {
			return _this.transitionTo('not-found');
		});
	},	
	serialize: function(model) {
 	   return { user_slug: model.get('id') };
	} 
});





/**
	USER INDEX - Default view
	List of user's collections
**/
Haul.SellerIndexRoute = Haul.AnonRoute.extend({
	model: function(params) {
		return this.modelFor('seller');
	},
 	setupController: function(controller, model) {
 		var user_id = this.modelFor('seller').get('id');

 		controller.set('user', this.modelFor('seller'));
 		controller.set('content', model);

 		

 	}, 
	renderTemplate: function(controller, model) {
		this.render('seller/index');
		this._super(controller, model);
	}
});


/**
	Users products for sale
**/
Haul.SellerProductsRoute = Haul.AnonRoute.extend({
	model: function(params) {
		return this.modelFor('seller').get('products');
	},
 	setupController: function(controller, model) {

 		console.log("HERE", this.modelFor('seller'));

 		controller.set('user', this.modelFor('seller'));
 		controller.set('content', model);
 	}, 
	renderTemplate: function(controller, model) {
		this.render('seller/products');
		this._super(controller, model);
	}
});


/**
	User's Followers
	List of users who follow this user.
**/
Haul.SellerFollowersRoute = Haul.AnonRoute.extend({
	model: function(params) {
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


/**
	User Follows 
	List of users this user follows
**/
Haul.SellerFollowsRoute = Haul.AnonRoute.extend({
	model: function(params) {
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


/**
	User's Likes
	Products this user has liked.
**/
Haul.SellerLikesRoute = Haul.AnonRoute.extend({
	model: function(params) {
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