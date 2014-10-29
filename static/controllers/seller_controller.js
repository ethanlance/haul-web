/*global Products, Ember */
(function () {
	'use strict'; 


	Haul.SellerController = Ember.ObjectController.extend({
		needs: ["auth"],  
		currentUser: Ember.computed.alias('controllers.auth.currentUser'),
	}); 
	

	//SHOW all user's products
	Haul.SellerIndexController = Ember.ArrayController.extend({
		needs: ["auth"], 
		currentUser: Ember.computed.alias('controllers.auth.currentUser'),

		//This array controller sorts it's images
		sortProperties: ['id'],
		sortAscending: false,

		// //Is currentUser viewing his own page?
		isProfileOwner: false,
		isProfileOwnerChanged: function() {
			var currentUser = this.get('currentUser');
			if( currentUser ){
				if(!Ember.isEmpty(currentUser) && this.user.get('id') === currentUser.get('id') ) {
					this.set('isProfileOwner', true);
				}
			} 
		}.observes('model'),

	}); 

})();