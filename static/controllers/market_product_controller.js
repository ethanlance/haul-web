/*global Products, Ember */
(function () {
	'use strict'; 
	Haul.MarketProductController = Ember.ObjectController.extend({ 
		needs: ["auth"], 
		currentUser: Ember.computed.alias('controllers.auth.currentUser'),
	});

	//SHOW one product
	Haul.MarketProductIndexController = Ember.ObjectController.extend({ 
		needs: ["auth"], 
		currentUser: Ember.computed.alias('controllers.auth.currentUser'),

		//Is currentUser viewing his own page?
		isMarketOwner: false,
		isProductOwner: false,
		marketProductPromise:null,

		setup: function() { 
			var currentUser = this.get('currentUser');
			var model = this.get('model');
			if( currentUser && model ){

				//Market's Owner
				if( !Ember.isEmpty(currentUser) && model.get('market').get('user').get('id') === currentUser.get('id')) {
					this.set('isMarketOwner', true);
				}	

				//Product's Owner
				// if( !Ember.isEmpty(currentUser) && this.get('product').get('user').get('id') === currentUser.get('id')) {
				// 	this.set('isProductOwner', true);
				// }
			}
		}.observes('model'),

	});
})();