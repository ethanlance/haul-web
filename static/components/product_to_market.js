/**
ProductToMarketComponent 
	This component  allows a user to manage wether a specific product is 
	associated to the user's marketplace.  The component adds a button to the page.

	You must pass this component:
	currentUser - this is the authenticated Local Storage user.

	And one of the following:
	a. model: this is one record of market_product model, that is to be edited.  
	b. product: this is one record of the product model, which will be added to a market.

**/
Haul.ProductToMarketComponent = Ember.Component.extend({
	
	model: null,
	product: null,
	market: null,
	currentUser: null,

	isProcessing: false,
	errorShow: false,
	errorMessage: null,

	showForm: true,
	showSuccessMessage: false, 
	showDeletedMessage: false, 

	editMode: false, 
	addMode: true, 

	productImage: null,
	productModel: null,
	productImageGet: function() {

		if(Ember.isEmpty(this.get('productModel'))) {
			return;
		}

		var _this = this;
		var store = this.get('targetObject.store');
		var product = this.get('productModel');

		store.find('product', product.get('id'))
		.then(function(product){
			return product.get('images');
		})
		.then(function(images){
			_this.set('productImage', images.get('firstObject').get('small'));
		});
		
	}.observes('productModel'),

	/**
		start: is the init function.
	**/
	start: function() {
		var _this = this;
		var store = this.get('targetObject.store');

		_this.set('showForm', true);
		_this.set('showSuccessMessage', false);

		//Model "market-product" was supplied to component.
		if( this.get('model') ) {
			this.set('addMode', false);
			this.set('editMode', true);
			this.set('productModel', this.get('model').get('product'));
			return;

		//Model "market-product" was not supplied to component.
		//Product must then be supplied.
		} else {
			//Create placeholder model.
			var model = store.createRecord('market-product');

			//Product was supplied to component, set it on the model.
			model.set('product', this.get('product'));

			//Set productModel, to kick off observer that get's product image.
			this.set('productModel', this.get('product'));

			//Persist our model.
			this.set('model', model);

			//Now go find out if this user has a market.
			this.findMarket();
		}

	}.on('init'),

	findMarket: function() { 
		var _this = this;
		var store = this.get('targetObject.store');
		var model = this.get('model');

		//Does this user have this product in their store?
		this.get('currentUser')
		.get('user')
		.then(function(user){
			return user.get('market')})
		.then(function(user_market){
			return user_market.get('market'); 
		})
		.then(function(market) {

			//IF user does not have a market, then we need to abort and display a message
			//about how to create a market first.
			if(Ember.isEmpty(market)) {
				console.log("USER DOES NOT HAVE MARKET");
				return;
			}

			//SET MARKET ON MODEL
			model.set('market', market); 
			
			//Now get all the products in this market.
			var product_list = store.find('market-product-list', {market_id: market.get('id')});

			//Pass this promise on to next method.
			_this.findProducts( product_list );

		}, function(error) {
			console.log("ERROR", error);
		});
	},

	findProducts: function(promise) {
		var _this = this;
		var product_id = this.get('product').get('id');

		//IF we find our product in the list of products
		//then we know this user already has this product in 
		//her market.  If that is the case then we get that product-market model
		//and this becomes an EDIT not an ADD.
		promise.then(function(products) { 
			if(Ember.isEmpty(products)) {
				return;
			}else{ 
				products.forEach(function(product){
					if( product.get('product').id === product_id ){ 

						//Product has a match in product list.  This is an "EDIT"
						_this.set('productModel', product.get('product'));
						_this.findModel(); 
						return;
					}
				});

				//Product has no match in product list.  This is an "ADD"
				return; 
			} 
		}, function(error) {
			console.log("ERROR", error);
		});

	},

	findModel: function() {
		var _this = this;
		var store = this.get('targetObject.store');
		var model = this.get('model');

		var market_id = model.get('market').id;
		var product_id = model.get('product').id;
		var data = {'market_id':market_id, 'product_id':product_id};
		
		//Get the market-product record.  
		//We will assign it to model.
		//This model will be edited by user.
		store.find('market-product', data)
		.then(function(results){
			return results.get('content');
		})
		.then(function(content){
			_this.set('model', content.get('firstObject'));
			_this.set('addMode', false);
			_this.set('editMode', true);
		}, function(error){
			console.log("ERROR", error);
		});
	},


	//Client Validation is complete.  Now persist to api.
	saveModel: function() {
		var model = this.get('model');
		var _this = this;

		var product_id = model.get('product').get('id');
		var market_id = model.get('market').get('id');

		model.set('id', product_id);
		model.save().then(
			function(result) { 
				_this.set('isProcessing', false);
				_this.set('showForm', false);
				_this.set('showSuccessMessage', true);

				//Also reload model "market_product_list"
				var store = _this.get('targetObject.store'); 
				store.find('market-product-list', {market_id: market_id});
			},
			function(error){
				_this.set('isProcessing', false);
				_this.set('errorShow', true);
				_this.set('errorMessage', Haul.errorMessages.get(error.status));
				console.log("Error" , error);
			}
		); 
	},


	deleteModel: function() {
		var model = this.get('model');
		var _this = this;

		var product_id = model.get('product').get('id');
		var market_id = model.get('market').get('id');
		var id = product_id	+ market_id;
		 
		model.deleteRecord();
		model.save().then(
			function(result) { 
				_this.set('isProcessingDelete', false);
				_this.set('showForm', false);
				_this.set('showDeletedMessage', true);

				//Also delete this product from the model "market_product_list".  Do not hit api
				var store = _this.get('targetObject.store');
				var mpl = store.getById('market_product_list', id);
				if(mpl){
					 store.deleteRecord(mpl);
					 store.unloadRecord(mpl);
				}

			},
			function(error){
				_this.set('isProcessingDelete', false);
				_this.set('errorShow', true);
				_this.set('errorMessage', Haul.errorMessages.get(error.status));
				console.log("Error" , error);
			}
		); 
	},


	actions: {

		//Add Product to Market
		curate: function() {
			$('#curateModal').modal('show');
		},

		curateCancel: function() {
			$('#curateModal').modal('hide');
		},

		close: function() {
			$('#curateModal').modal('hide');	
		},

		//Submit action.  Initiate Validation.
		submit: function() { 

			this.set('isProcessing', true);

			var _this = this;
			var model = this.get('model');

	 		//Model Validations:
			model.validate().then(function(result){
				_this.saveModel();	//Validation complete, now save.
			}, function(error) {
				_this.set('isProcessing', false);
				_this.set('showErrors', true);
			}); 
		},

		//remove this product from Market
		delete: function() {
			this.set('isProcessingDelete', true);
			var _this = this;
			
			this.deleteModel();
		
		},
	}
});