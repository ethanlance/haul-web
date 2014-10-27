/*global Products, Ember */
(function () {
	'use strict'; 

	Haul.MarketController = Ember.ObjectController.extend({
		needs: ["auth"],
	});

	Haul.MarketIndexController = Ember.ArrayController.extend({

		market: {}, 

		needs: ["auth"],
	});

	Haul.MarketEditController = Ember.ObjectController.extend({
		needs: ["auth"],
		currentUser: Ember.computed.alias('controllers.auth.currentUser'),


		actions: {

			submit: function() {
				var _this = this;
				var market = this.get('model');

				market.set('user_id', this.get('currentUser').get('id'));

				console.log("marketplace", market)

				market.save().then(
					function(result) { 
						_this.transitionToRoute('market', market.reload());
					},
					function(error){
						console.log("Error" , error);
					}
				);
			}
		}
	});
})();