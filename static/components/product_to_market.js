
Haul.ProductToStoreComponent = Ember.Component.extend({
	
	model: null,
	product: null,
	market: null,
	currentUser: null,

	isProcessing: false,
	errorShow: false,
	errorMessage: null,

	showForm: true,
	showSuccessMessage: false, 


	start: function() {
		var _this = this;
		var store = this.get('targetObject.store');

		_this.set('showForm', true);
		_this.set('showSuccessMessage', false);

		//Create an empty model.
		this.set('model', store.createRecord('market-product'));

		var model = this.get('model');

		//Set the product, user and market on thes model.
		model.set('product', this.get('product'));
		

		var promise = this.get('currentUser').get('user');
		var promise = promise.then(function(user){ 	
			model.set('user', user);
			return user.get('market');
		});
		promise.then(function(market){ 
			model.set('market', market);
		});

	}.on('init'),

	//Client Validation is complete.  Now persist to api.
	saveModel: function() {
		var model = this.get('model');
		var _this = this;

		model.save().then(
			function(result) { 
				_this.set('isProcessing', false);
				_this.set('showForm', false);
				_this.set('showSuccessMessage', true);
				$('#curateModal').modal('hide');
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
		}
	}
});