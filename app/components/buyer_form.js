import Ember from 'ember';
export default Ember.Component.extend({

	currentUserBinding: "session.currentUser",

	

	//Get Buyer.
	getBuyer: function() {

		if(Ember.isEmpty(this.get('currentUser')) ) {
			return;
		}

		var _this = this;
		var store = this.container.lookup("store:main");
		var user = this.get('currentUser');

		store.find('buyer', user.id).then(
			function success(record){

				//buyer exists.
				_this.set('model', record);

			},
			function failure(error){

				//Buyer does not exist.
				var buyer = store.createRecord('buyer');
				buyer.set('id', user.get('id'));
				buyer.set('user_id', user.get('id'));
				buyer.set('firstname', user.get('firstname'));
				buyer.set('lastname', user.get('lastname'));
				buyer.set('email', user.get('email'));

				_this.set('model', buyer);

			}	
		);
	}.observes('currentUser.id'),


	saveBuyer: function() {

		var _this = this;
		var model = this.get('model');

		model.validate()
		.then(
			function(){
				console.log("SAVE", model);
				return model.save();
			}
		)
		.then(
			function success(results){
				console.log("SUCCESS", results);
				_this.set('isProcessing', false);
			},
			function failed(error){
				_this.set('isProcessing', false);
				_this.set('showErrors', true);
			}
		);

	},


	didInsertElement: function() {
		this.getBuyer();
	},

	actions: {

		submit: function() {
			this.saveBuyer();
		}
	}

});