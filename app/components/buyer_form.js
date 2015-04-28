import Ember from 'ember';
export default Ember.Component.extend({

	currentUserBinding: "session.currentUser",

	currentUserIdBinding: "session.currentUser.id",

	buttonText: 'update',

	showForm: true, 

	//Get Buyer.
	getBuyer: function() {

		if(Ember.isEmpty(this.get('currentUserId')) ) {
			return;
		}

		var _this = this;
		var store = this.container.lookup("store:main");
		var user = this.get('currentUser');

		store.find('buyer', user.id).then(
			function success(record){

				//buyer exists.
				_this.set('model', record);

				_this.set('showForm', false);

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

				_this.set('showForm', true);

			}	
		);
	}.observes('currentUserId'),


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
				_this.set('model', model);
				_this.set('showForm', false);
			},
			function failed(error){
				_this.set('isProcessing', false);
				_this.set('showErrors', true);
			}
		);

	},


	actions: {

		submit: function() {
			this.saveBuyer();
		}
	}

});