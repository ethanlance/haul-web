/*global Products, Ember */
(function () {
	'use strict'; 

	Haul.CollectionProductView = Ember.View.extend()
	Haul.CollectionProductController = Ember.ObjectController.extend({ 
		needs: ["auth"], 
		currentUser: Ember.computed.alias('controllers.auth.currentUser'),
	});

	//SHOW one product
	Haul.CollectionProductIndexEditView = Ember.View.extend()
	Haul.CollectionProductIndexController = Ember.ObjectController.extend({ 
		needs: ["auth"], 
		currentUser: Ember.computed.alias('controllers.auth.currentUser'),
		model: null,

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

			}
		}.observes('model'),

	});





	//EDIT
	Haul.CollectionProductEditView = Ember.View.extend()
	Haul.CollectionProductEditController = Ember.ObjectController.extend({ 
		needs: ["auth"], 
		currentUser: Ember.computed.alias('controllers.auth.currentUser'),

		//Is currentUser viewing his own page?
		isCollectionOwner: false,
		isProductOwner: false,
		collectionProductPromise:null,
		model:null,
		editorialForQuill: null,

		setup: function() { 
			var currentUser = this.get('currentUser');
			var model = this.get('model');
			this.set('editorialForQuill', model.get('editorial'));
			if( currentUser && model ){

				//Collection's Owner
				if( !Ember.isEmpty(currentUser) && model.get('collection').get('user').get('id') === currentUser.get('id')) {
					this.set('isCollectionOwner', true);
				}	
			}


		}.observes('model'),

		saveModel: function() { 

			var model = this.get('model'); 
			var _this = this; 

			model.save()
			.then(
				function(result) { 
					_this.set('isProcessing', false);
					_this.transitionToRoute('collection-product', model.get('product').id);
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

			quillChange: function(text) {
				var model = this.get('model');
				model.set('editorial', text);
			},

			cancel: function() {
				this.transitionToRoute('collection-product', this.get('model'));
			},

			submit: function() { 
				
				this.set('isProcessing', true);

				var _this = this;
				var model = this.get('model');

				//Trim
				if( model.get('editorial') ) {
					model.set('editorial', model.get('editorial').trim())
				}

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