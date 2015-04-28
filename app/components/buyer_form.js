import Ember from 'ember';
export default Ember.Component.extend({

	currentUserBinding: "session.currentUser",

	currentUserIdBinding: "session.currentUser.id",

	buttonText: 'update',

	show_form: false,

	show_seller: false,

	show_loading: true,

	showChanged: function() {
		this.set('show_loading', false);
		this.set('show_form', false);
		this.set('show_buyer', false);
		this.set('show_'+this.get('show'), true);
	}.observes('show'),

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

				_this.set('show', 'buyer');

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

				_this.set('show', 'form');

			}	
		);
	}.on('didInsertElement').observes('currentUserId'),


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
				
				_this.set('show', 'buyer');
			},
			function failed(error){
				_this.set('isProcessing', false);
				_this.set('showErrors', true);
			}
		);

	},


	actions: {

		doSubmit: function() {
			this.saveBuyer();
		},

		showEdit: function() {
			this.set('show', 'form');
		},
	}

});