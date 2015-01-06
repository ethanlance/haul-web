import Ember from 'ember';
import auth from './auth';
import facebook from './facebook';

// LOGIN
var LoginController = Ember.ObjectController.extend({
	
	needs: ['auth', 'facebook'],

	error: false,
	error404: false,
	error409: false,
	isProcessingFacebook: false, 
	isProcessingLogin: false, 
	facebookController: null, 
	authController: null,

	reset: function() {
		this.set('error', false);
		this.set('error404', false);
		this.set('error409', false);
	},

	setUp: function(){
		this.facebookController = this.get('controllers.facebook');
		this.authController = this.get('controllers.auth');
	}.on('init'),

	loginUserByFB: function() {
		//LOG FB USER INTO HAUL
		return this.authController.authenticateByFB();
	},

	loginByEmail: function(data) {
			var _this = this;

			//AJAX CALL - for getting the User Token back.  
			//Pass params email/password to it.
			return Ember.$.ajax({
					url: _this.authController.host + '/auth/user',
					type: 'post',
					data: data,
					headers: {
						Authorization: 'Bearer client_' + _this.authController.client_token
					},
					dataType: 'json'
			}).then(
				function(response) {
					_this.authController.send('setupUser', response);
				},
				function(error) {	
					_this.set('isProcessingLogin', false);

					if( error.status === 409 ){
						_this.set('error409', true);
					}else{
						_this.set('error', true);
					}
				}
			);
	},

	actions: {

		//LOGIN via FB token
		facebookLogin: function() {
			this.set('isProcessing', true);
			var _this = this;
		
			this.facebookController.triggerFacebook().then(
		 		function onFulfill(response) { 
					console.log("Success!", response);
					return _this.loginUserByFB(response);
				}
			).then(
		 		function onFulfill(response) {
					_this.set('isProcessingFacebook', false);
					return console.log("Success!", response); 
				}, 
				function onReject(error) {
					_this.set('error404', true);
					_this.set('isProcessingFacebook', false);
					console.error("Failed!", error); 
					console.error("Boom", error.status); 
				}
			);
		},

		//LOGIN via email, password
		submit: function() {
			this.set('isProcessingSubmit', true);

			//Get the following from user submitted form.
			var data = this.getProperties('email', 'password');	
			var _this = this;
			var model = this.get('model');

	 		//Model Validations:
			model.validate().then(function(){
				_this.loginByEmail(data);	
			}, function() {
				_this.set('isProcessingLogin', false);
				_this.set('showErrors', true);
			});
	 	}
	}
});
export default LoginController;
