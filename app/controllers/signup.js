import Ember from 'ember';
import auth from './auth';
import facebook from './facebook';
/* global Haul*/

// Sign Up form
var SignupController = Ember.ObjectController.extend({
	
	//Controller
	needs: ['auth', 'facebook'], 
 
	client_token: Haul.Server.CLIENT_TOKEN,
	host: Haul.Server.USER_SERVER_HOST,

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
				url: _this.get('host') + '/users',
				type: 'post',
				data: data,
				headers: {
					Authorization: 'Bearer client_' + _this.get('client_token')
				},
				dataType: 'json'
		}).then(
			function() {
				_this.set('isProcessingFacebook', false);
				return _this.authController.authenticateByFB();
			},
			function(error) {
				return error;
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
					Authorization: 'Bearer client_' + this.client_token
				},
				dataType: 'json'
		}).then(
			function() {
				_this.set('isProcessingSubmit', false); 
				_this.set('emailRegistrationRequested', true);
			}, 

			function(error) { 
				return error;
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
				}
			).then(
		 		function onFulfill(response) {
					console.log("Success!", response); 

				}, 
				function onReject(error) {
					console.error("Failed Signup", error);
					
					_this.set('isProcessingFacebook', false);

					if( error.status === 409){
						_this.set('error409', true);
					}else{
						_this.set('error', true);	
					} 
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

				if( error.status === 409){
					_this.set('error409', true);
				}else{
					_this.set('error', true);
				}
			});
		}
	}
});
export default SignupController;