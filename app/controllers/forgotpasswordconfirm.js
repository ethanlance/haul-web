import Ember from 'ember';

//Forgot Password Confirm: Form to change a user password w/ ticket_id (token)
var ForgotpasswordconfirmController = Ember.ObjectController.extend({
	needs: ['auth'],

	queryParams: ['ticket_id', 'user_id'],

	//Template Keys
	ticket_id: null,
	user_id: null,
	isProcessing: false, 
	error: false,

	reset: function() {
		this.set('error', false); 
	},

	
	actions: {

		focus: function() {
			this.reset();
		},

		submit: function() {
			var authController = this.get('controllers.auth');
			var _this = this;

			this.set('isProcessing', true);

			var data = this.getProperties('password');
 
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
					authController.setupUser(response);
				}, 

				function() {
					_this.set('isProcessing', false);
					_this.set('error', true);
				}
			);
		}
	}
});
export default ForgotpasswordconfirmController;
