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