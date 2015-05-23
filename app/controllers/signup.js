import Ember from 'ember';  
import config from '../config/environment';
import ErrorMixin from '../mixins/server_error';
var Config = config.APP;

export default Ember.ObjectController.extend(ErrorMixin,{
	
	needs: ['facebook', 'login'], 
 
	client_token: Config.Server.CLIENT_TOKEN,
	host: Config.Server.USER_SERVER_HOST,

	emailRegistrationRequested: false,	
	isProcessingFacebook: false,
	isProcessingSubmit: false,
	error409: false,
	error: false,
	hideCancelBtn:false,

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
	// Creates a user and sets the user to verified immediately
	createUserByFB: function(data) {
		var _this = this;
		data.password = 'Test00000?';
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

	//createUser who then will need to verify via a token we send them in an email.
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

			return this.socialApiClient.load()
			.then(function(FB){
			
				return new Ember.RSVP.Promise(function(resolve, reject) {

					FB.login(function(response){
					  	if (response.authResponse) {
					  		_this.get('controllers.facebook').set('facebook_user_id', response.authResponse.userID);
					  		_this.get('controllers.facebook').set('facebook_access_token', response.authResponse.accessToken);
					  		
					  		return _this.get('controllers.facebook').getFBUser(function(data){
					  			resolve(data);
					  		});

					  	} else {
							console.log('User cancelled login or did not fully authorize.');
							reject();
					  	}
				  	}, {scope: 'email'});	
				});
			})
			
			.then(function(response) {
				return _this.createUserByFB(response); 
			})
			
			.then(function(response){
				var data = { 
					fb_user_id: _this.get('controllers.facebook.facebook_user_id'), 
					fb_token: 	_this.get('controllers.facebook.facebook_access_token')}
				return  _this.get('controllers.login').authenticate('/auth/facebook', 'post', data);
			})
			
			.then(
		 		function onFulfill() {
					_this.set('isProcessingFacebook', false);
					_this.send('closeModal');
				}, 
				function onReject(error) {
					
					//User exists already.  Try to login them in.
					if( error.status === 409){
						var data = { 
							fb_user_id: _this.get('controllers.facebook.facebook_user_id'), 
							fb_token: 	_this.get('controllers.facebook.facebook_access_token')}

							var promise = _this.get('controllers.login').authenticate('/auth/facebook', 'post', data);
							
							promise.then(

								function success() {
									_this.set('isProcessingFacebook', false);
									_this.send('closeModal');
								},
								function failed(error){
									console.log("error", error);
								}
							);

					}else{
						console.error("Failed Signup", error);
						_this.set('isProcessingFacebook', false);
						_this.set('showErrorsFB', true);	


						

						if( error.hasOwnProperty('responseText')) {
							var obj = JSON.parse(error.responseText);
							if( obj.message  === "email is required" ){
								var message = "Oops, Facebook did not supply us with your email address. You may need to verify your email address in your Facebook settings."
								_this.set('serverErrorMessage', message); 
							}else{
								_this.handleServerError(error);
							}
							
							
						}else{
							_this.handleServerError(error);
						}

					} 
				}
			);
		},

		//Action: Clicked "email sign up"
		emailSignup: function() { 
			this.set('isProcessingSubmit', true);

			//Get the following from user submitted form.
			var data = this.getProperties('email');	
			var _this = this;
			
	 		//Validate Modal.
			_this.createUserByEmail(data)
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
					}
				}
			);
		}
	}
});