 Haul.CollectionSelectorComponent = Ember.Component.extend({
	currentUser: null,
	isProcessing:false,
	isShowCreateCollection:false,

	selectedCollectionId: null,

	userIdBinding: "currentUser.id",
	

	start: function() {
		this.makeModel(); 
	}.on('init'),

	makeModel: function() {
		var store = this.get('targetObject.store');
		var _this = this;
		var model = store.createRecord('collection');
		this.set('model', model);
	},	

	reset: function() {
		this.set('name',null);
	},

	saveModel: function() {
		var model = this.get('model');
		var _this = this;

		model.save().then(
			function(result) { 

				console.log("result", result);

				_this.reset();
				_this.set('isShowCreateCollection', false);
				_this.set('isProcessing', false);
				_this.set('errorShow', false);

				_this.set('selectedCollectionId', result.get('id') );
				
				//RELOAD
				var store = _this.get('targetObject.store');
				store.find('user-collection', {user_id: _this.get('userId')});

				//Reload! 
				_this.makeModel(); 

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

 		cancel: function() {
 			this.set('isShowCreateCollection', false);
 		},

 		submit: function() {
 			console.log("HERE?")
			this.set('isProcessing', true);

			var _this = this;
			var model = this.model;
			model.set('user_id', this.get('userId'));
			model.set('name', this.get('name'));
			model.set('description', this.get('description')); 

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