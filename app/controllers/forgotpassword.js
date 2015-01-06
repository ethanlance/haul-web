import Ember from 'ember';
import auth from './auth';


//Forgot Password Form:  Enter email address to request a password reset token
var ForgotpasswordController = Ember.ObjectController.extend({
	
	//Controllers
	needs: ['auth'],

	queryParams: ['email'],
	email: null,
	
	emailSent: false,
	isProcessing: false, 
	error: false,
	error409: false,
	emailRegistrationRequested:false,

	reset: function() {
		this.set('error', false);
		this.set('error409', false);
	},

	actions: {
		focus: function() {
			this.reset();
		},

		submit: function() { 
			var authController = this.get('controllers.auth');
			var _this = this;
			var data = this.getProperties('email');
			data['action'] = 'password-reset';


			//AJAX CALL - for getting the User Token back.  
			//Pass params email/password to it.
			return Ember.$.ajax({
					url: authController.host + '/users/email',
					type: 'post',
					data: data,
					headers: {
						Authorization: 'Bearer client_' + authController.client_token
					},
					dataType: 'json'
			}).then(
				function() {
					
					_this.set('isProcessing', false); 
					_this.set('emailSent', true);

					//TRANSITION:
					_this.set('emailRegistrationRequested', true);
					
				}, 

				function(error) {
						
					_this.set('isProcessing', false);

					if( error.status === 409 ){
						_this.set('error409', true);
					}else {
						_this.set('error', true);
					} 
				}
			);
		}
	}
});
export default ForgotpasswordController;