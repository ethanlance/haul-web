import Ember from 'ember';  
import config from '../config/environment';
var Config = config.APP;

export default Ember.ObjectController.extend({
	
	needs: ['facebook', 'login'], 
 
	client_token: Config.Server.CLIENT_TOKEN,
	host: Config.Server.USER_SERVER_HOST,

	emailRegistrationRequested: false,	
	isProcessingFacebook: false,
	isProcessingSubmit: false,
	error409: false,
	error: false,

	//Hide API Errors when changes are made to email field.
	emailChanged: (function() {	
		this.set('error', false);
		this.set('error409', false);
	}).observes('email'),

	reset: function() { 
		this.set('error', false);
		this.set('error409', false);
		this.set('emailRegistrationRequested', false);
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
				Authorization: 'Bearer ' + _this.get('client_token')
			},
			dataType: 'json'
		});
	},

	//createUser
	// Send this data to /users api and create the user.
	// This bypasses email confirmation step.
	createUserByEmail: function(data) {
		
		//Flag:
		data['action'] = 'email-register';

		//Pass params email/password to it.
		return Ember.$.ajax({
			url: this.get('host') + '/users/email',
			type: 'post',
			data: data,
			headers: {
				Authorization: 'Bearer ' + this.client_token
			},
			dataType: 'json'
		});
	}, 

	actions: {

		focus: function() { 
			this.reset();
		},

		//Action: Clicked "facebook signup"
		facebookSignup: function() { 
			this.set('isProcessingFacebook', true);

			var _this = this;

			this.get('controllers.facebook').triggerFacebook()
			
			.then(function onFulfill(response) {
				return _this.createUserByFB(response); 
			})
			
			.then(function(){
				return _this.get('controllers.facebook').authenticateByFB();
			})

			.then(function(response){
				return _this.get('controllers.login').startUserSession(response);
			})

			.then(
		 		function onFulfill() {
					_this.set('isProcessingFacebook', false);
				}, 
				function onReject(error) {
					
					//User exists already.  Try to login them in.
					if( error.status === 409){
						//_this.set('error409', true);
						return _this.get('controllers.facebook').authenticateByFB()
						.then(function(response) {
							return _this.get('controllers.login').startUserSession(response);			
						});
					}else{
						console.error("Failed Signup", error);
						_this.set('isProcessingFacebook', false);
						_this.set('error', true);	
					} 
				}
			)
			.then(
				function onNada(){},
				function onReject() {
					_this.set('isProcessingFacebook', false);
					_this.set('error', true);	
				}
			);
		},

		//Action: Clicked "email sign up"
		emailSignup: function() { 
			this.set('isProcessingSubmit', true);

			//Get the following from user submitted form.
			var data = this.getProperties('email');	
			var _this = this;
			var model = this.get('model');

	 		//Validate Modal.
			model.validate().then(function(){
				//Create User.
				return _this.createUserByEmail(data);	
			})
			.then(
				function() {
					_this.set('isProcessingSubmit', false); 
					_this.set('emailRegistrationRequested', true);
				},
				function(error) {
					_this.set('isProcessingSignup', false);
					_this.set('showErrors', true);

					if( error.status === 409){
						_this.set('error409', true);
					}else{
						_this.set('error', true);
					}
				}
			);
		}
	}
});