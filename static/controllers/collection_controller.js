/*global Products, Ember */
(function () {
	'use strict'; 

	Haul.CollectionController = Ember.ObjectController.extend({
		needs: ["auth"],
		model: {},
	});

	Haul.CollectionIndexController = Ember.ObjectController.extend({
		needs: ["auth"],  
		currentUser: Ember.computed.alias('controllers.auth.currentUser'),
		products: {},
		model: {},

		//This array controller sorts it's images
		sortProperties: ['id'],
		sortAscending: true,	

		//Is currentUser viewing his own page?
		isCollectionOwner: false, 
 
		setup: function() { 
			var _this = this;
			var currentUser = this.get('currentUser');	
			var collection_id = this.get('collection').get('id');

			if( currentUser ){
				if( !Ember.isEmpty(currentUser) && this.get('collection').get('user').get('id') === currentUser.get('id')) {
					this.set('isCollectionOwner', true);
				}
			} 

			this.store.find('collection-product-list', {collection_id: collection_id});
	 		var filter = this.store.filter('collection-product-list', function(mpl) {
	 			if( mpl.get('id') && mpl.get('collection_id') === collection_id) return true;
	 		});
	 		this.set("products", filter);

		}.observes('collection'),
	});





	Haul.CollectionEditController = Ember.ObjectController.extend({
		needs: ["auth"],
		currentUser: Ember.computed.alias('controllers.auth.currentUser'),
		products: {},
		model: {},
		orderModel:null, 

		//This product's image objects.
		orderedProducts: [],

		isProcessing: false,
		errorShow: false,
		errorMessage: null,

		setup: function() {
			var collection_id = this.get('id');
			this.store.find('collection-product-list', {collection_id: collection_id});
	 		var filter = this.store.filter('collection-product-list', function(mpl) {
	 			if( mpl.get('id') && mpl.get('collection_id') === collection_id ) return true;
	 		});
	 		this.set("products", filter);

		}.observes('model'),

		//Preserves the drag sort order of the images.
		updateSortOrder: function(indexes) {  
			this.set('orderedProducts', Object.keys(indexes)); 
			console.log('orderedProducts', this.get('orderedProducts'))
		},

		createOrderModel: function() {
			var orderModel = this.store.createRecord('collection-product-list');
			console.log("COLLECTION ",  this.model.get('id'))
			orderModel.set('collection_id', this.model.get('id'));
			orderModel.set('product_ids', this.get('orderedProducts'));
			this.set('orderModel', orderModel);
		},

		saveModel: function() {

			this.createOrderModel();

			var model = this.get('model');
			var orderModel = this.get('orderModel');
			var _this = this; 

			model.save()
			.then(function() {
				orderModel.save();
			}).then(
				function(result) { 
					_this.set('isProcessing', false);
					_this.transitionToRoute('collection', model.reload());
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

				//Trim
				if( model.get('description') ) {
					model.set('description', model.get('description').trim())
				}else{
					var userName = this.get('currentUser.name');
					model.set('description', userName + " hasn't written a description yet.")
				}
				if( model.get('name') )
					model.set('name', model.get('name').trim())


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