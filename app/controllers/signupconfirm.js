import Ember from 'ember';

export default Ember.ObjectController.extend({
	
	//Controllers
	needs: ['auth'],

	queryParams: ['ticket_id', 'user_id'],

	//Template Keys
	ticket_id: null,
	user_id: null,
	isProcessing: false, 
	showErrors: false,
	error: false,

	reset: function() {
		this.set('error', false); 
		this.set('isProcessing', false);
	},

	confirmSignup: function(data) {
		var authController = this.get('controllers.auth');
		var _this = this;
		this.set('isProcessing', true);
 
		//Pass params email/password to it.
		return Ember.$.ajax({
				url: authController.host + '/users/' + this.get('user_id') + "/tickets/" + this.get('ticket_id'),
				type: 'put',
				data: data,
				headers: {
					Authorization: 'Bearer client_' + authController.client_token
				},
				dataType: 'json'
		}).then(
			function(response) {
				return authController.setupUser(response);
			}
		).then(null, function(error) {
			console.log("Error submit confirm", error);
			_this.set('isProcessing', false);
			_this.set('error', true); 
		});
	},


	actions: {
		focus: function() {
			this.reset();
		},

		//LOGIN via email, password
		submit: function() {
			this.set('isProcessing', true);

			var _this = this;
			var model = this.get('model');
			var data = this.getProperties('firstname', 'lastname', 'password');

	 		//Model Validations:
			model.validate().then(function(){
				_this.confirmSignup(data);	
			}, function() {
				_this.set('isProcessing', false);
				_this.set('showErrors', true);
			});
	 	}
	}
});
