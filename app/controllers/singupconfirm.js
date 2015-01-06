import Ember from 'ember';
import auth from './auth';

// Sign Up Confirm Form
var SignupconfirmController = Ember.ObjectController.extend({
	
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
	},

	confirmSignup: function(data) {
		var authController = this.get('controllers.auth');
		var _this = this;
		this.set('isProcessing', true);

		//AJAX CALL - for getting the User Token back.  
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
				return authController.send('setupUser', response);
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
export default SignupconfirmController;