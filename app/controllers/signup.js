import Ember from 'ember';
import auth from './auth';
import facebook from './facebook';

// Sign Up form
var SignupController = Ember.ObjectController.extend({
	
	//Controller
	needs: ['auth', 'facebook'], 

	//Template Keys
	emailRegistrationRequested: false,
	
	isProcessingFacebook: false,
	isProcessingSubmit: false,

	error409: false,
	error: false,
	facebookController: null, 
	authController: null,

	setUp: function(){
		this.facebookController = this.get('controllers.facebook');
		this.authController = this.get('controllers.auth');
	}.on('init'),

	//Hide API Errors when changes are made to email field.
	emailChanged: (function() {	
		this.set('error', false);
		this.set('error409', false);
	}).observes('email'),

	reset: function() {
		this.set('error', false);
		this.set('error409', false);
	},

	//createUser
	// Send this data to /users api and create the user.
	// This bypasses email confirmation step.
	createUserByFB: function(data) {
		var _this = this;
		//CREATE HAUL USER FOR FB USER:
		return Ember.$.ajax({
				url: _this.authController.host + '/users',
				type: 'post',
				data: data,
				headers: {
					Authorization: 'Bearer client_' + _this.authController.client_token
				},
				dataType: 'json'
		}).then(
			function() {
				_this.set('isProcessingFacebook', false);

				//NOW LOG FB USER INTO HAUL
				return _this.authController.authenticateByFB();

			},
			function(error) {
				_this.set('isProcessingFacebook', false);
				if( error.status === 409){
					_this.set('error409', true);
				}else{
					_this.set('error', true);	
				} 
			}
		);
	},

	//createUser
	// Send this data to /users api and create the user.
	// This bypasses email confirmation step.
	createUserByEmail: function(data) {
		var _this = this;
		//Flag:
		data['action'] = 'email-register';

		//Pass params email/password to it.
		return Ember.$.ajax({
				url: this.authController.host + '/users/email',
				type: 'post',
				data: data,
				headers: {
					Authorization: 'Bearer client_' + this.authController.client_token
				},
				dataType: 'json'
		}).then(
			function() {
				_this.set('isProcessingSubmit', false); 
				_this.set('emailRegistrationRequested', true);
			}, 

			function(error) {
				_this.set('isProcessingSubmit', false);
				if( error.status === 409){
					_this.set('error409', true);
				}else{
					_this.set('error', true);
				}
			}
		);
	}, 

	actions: {

		focus: function() {
			this.reset();
		},

		//Action: Clicked "facebook signup"
		facebookSignup: function() { 
			this.set('isProcessingFacebook', true);

			var _this = this;

			this.facebookController.triggerFacebook().then(
		 		function onFulfill(response) {
					return _this.createUserByFB(response);

				}, 
				function onReject(error) {
					console.error("Failed!", error);
					this.set('isProcessingFacebook', false);
				}
			).then(
		 		function onFulfill(response) {
					console.log("Success!", response); 

				}, 
				function onReject(error) {
					console.error("Failed!", error);
					this.set('isProcessingFacebook', false);
				}
			);
		},

		//Action: Clicked "email sign up"
		submit: function() { 
			this.set('isProcessingSubmit', true);

			//Get the following from user submitted form.
			var data = this.getProperties('email');	
			var _this = this;
			var model = this.get('model');

	 		//Model Validations:
			model.validate().then(function(){
				_this.createUserByEmail(data);	
			}, function() {
				_this.set('isProcessingSignup', false);
				_this.set('showErrors', true);
			});
		}
	}
});
export default SignupController;