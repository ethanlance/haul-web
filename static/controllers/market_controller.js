/*global Products, Ember */
(function () {
	'use strict'; 

	Haul.MarketController = Ember.ObjectController.extend({
		needs: ["auth"],
	});

	Haul.MarketIndexController = Ember.ArrayController.extend({
		needs: ["auth"], 
		currentUser: Ember.computed.alias('controllers.auth.currentUser'),

		//Is currentUser viewing his own page?
		isMarketOwner: false,
		marketHasProducts: false,
		marketOwnerHasProducts: false,

		//Does this market have any products yet?
		doesMarketHaveProducts: function() {
			var _this = this;
			var market_id = this.get('market').id;
			this.store.find('market-product-list', {market_id: market_id}).then(function(products){
				if(Ember.isEmpty(products)){ 
					_this.set('marketHasProducts', false);
				}else{
					_this.set('marketHasProducts', true);
				}
			});

		}.observes('market'),


		//Does the market owner have their own products they can add to the store?
		doesMarketOwnerHaveProducts: function() {
			if(this.get('isMarketOwner')){
				var _this = this;
				var user_id = this.get('market').get('user_id');

				this.store.find('product-list', {user_id: user_id}).then(function(products){
					if(!Ember.isEmpty(products)){
						_this.set('marketOwnerHasProducts', true);
					}else{
						_this.set('marketOwnerHasProducts', false);
					}
				});
			}
		}.observes('isMarketOwner'),
		
		setup: function() { 
			var _this = this;
			var currentUser = this.get('currentUser');

			if( currentUser ){
				if( !Ember.isEmpty(currentUser) && this.get('market').get('user').get('id') === currentUser.get('id')) {
					this.set('isMarketOwner', true);
				}
			}
		}.observes('market'),
	});

	Haul.MarketEditController = Ember.ObjectController.extend({
		needs: ["auth"],
		currentUser: Ember.computed.alias('controllers.auth.currentUser'),
		model: null,

		isProcessing: false,
		errorShow: false,
		errorMessage: null,

		saveModel: function() {
			var model = this.get('model');
			var _this = this;

			model.save().then(
				function(result) { 
					_this.transitionToRoute('market', model.reload());
				},
				function(error){ 
					_this.set('isProcessing', false);
					_this.set('errorShow', true);
					_this.set('errorMessage', Haul.errorMessages.get(error.status));
					console.log("Error" , error);
				}
			);
		},

		actions: {

			submit: function() {
				this.set('isProcessing', true);

				var _this = this;
				var model = this.model;
				model.set('user_id', this.get('currentUser').get('id'));
				
		 		//Model Validations:
				model.validate().then(function(result){
					_this.saveModel();	
				}, function(error) {
					_this.set('isProcessing', false);
					_this.set('showErrors', true);
				});
			}
		}
	});
})();