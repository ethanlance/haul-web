/*global Products, Ember */
(function () {
	'use strict'; 
	Haul.CollectionProductController = Ember.ObjectController.extend({ 
		needs: ["auth"], 
		currentUser: Ember.computed.alias('controllers.auth.currentUser'),
	});

	//SHOW one product
	Haul.CollectionProductIndexController = Ember.ObjectController.extend({ 
		needs: ["auth"], 
		currentUser: Ember.computed.alias('controllers.auth.currentUser'),

		//Is currentUser viewing his own page?
		isCollectionOwner: false,
		isProductOwner: false,
		collectionProductPromise:null,

		setup: function() { 
			var currentUser = this.get('currentUser');
			var model = this.get('model');
			if( currentUser && model ){

				//Collection's Owner
				if( !Ember.isEmpty(currentUser) && model.get('collection').get('user').get('id') === currentUser.get('id')) {
					this.set('isCollectionOwner', true);
				}	

				//Product's Owner
				// if( !Ember.isEmpty(currentUser) && this.get('product').get('user').get('id') === currentUser.get('id')) {
				// 	this.set('isProductOwner', true);
				// }
			}
		}.observes('model'),

	});
})();