import Ember from 'ember';
import config from '../config/environment';
var Config = config.APP;
import ErrorMixin from '../mixins/server_error';
export default Ember.ObjectController.extend(ErrorMixin,{
	
	needs: ['facebook'],
	
	animateClose:false, 
	
	client_token: Config.Server.CLIENT_TOKEN,
	
	host: Config.Server.USER_SERVER_HOST,
	
	showErrors:false,
	
	email:null,
	
	password:null,
	
	error: false,
	
	error404: false,
	
	error409: false,

	showErrorsFB: false,
	
	isProcessingFacebook: false, 

	isProcessingSignup: false,
	
	isProcessingLogin: false,

	emailRegistrationRequested: false,	
	
	isProcessingSubmit: false,
	
	content: null,
	
	model: {},

	hideCancelBtn: false, //do not remove this. breaks anon users trying to hit page that requires auth.

	//Hide API Errors when changes are made to email field.
	emailChanged: (function() {	
		this.set('error', false);
		this.set('error409', false);
	}).observes('email'),


	start: function() {
		
		//Get ready for Facebook login:
		this.socialApiClient.load()
		
		//Get ready for email/password login:
		var model =  this.store.createRecord('authlogin');
		this.set('model', model);

	}.on('init'),

	reset: function() {
		this.set('error', false);
		this.set('error404', false);
		this.set('error409', false);
		this.set('isProcessingFacebook', false);
		this.set('isProcessingLogin', false);
		this.set('emailRegistrationRequested', false);
		this.set('isProcessingSignup', false);
	},

	authenticate: function(api, type, data) {
		var host = this.get('host'); 
		return this.get('session').authenticate('authenticator:custom',{url: api, type:type, host: host, data: data});
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

		cancel: function() {
			this.set('animateClose', true);
		},

		//LOGIN via FB token
		facebookLogin: function() {
			
			this.set('isProcessingFacebook', true);

			var _this = this;

			return this.socialApiClient.load()


			//Sign this user in via FB.
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
							reject();
					  	}
				  	}, {scope: 'email'});	
				});
			})
			
			//Create a HAUL user for this FB user.
			.then(function(response) {
				return _this.createUserByFB(response); 
			})
			
			//Log this Haul user in.
			.then(function(response){
				var data = { 
					fb_user_id: _this.get('controllers.facebook.facebook_user_id'), 
					fb_token: 	_this.get('controllers.facebook.facebook_access_token')}
				return  _this.authenticate('/auth/facebook', 'post', data);
			})
			
			.then(
		 		function onFulfill() {
					_this.set('isProcessingFacebook', false);
					_this.send('closeModal');
				}, 
				function onReject(error) {
					
					//A Haul user already exists for this FB user.
					// -- instead log this user in.
					if( error.status === 409){
						var data = { 
							fb_user_id: _this.get('controllers.facebook.facebook_user_id'), 
							fb_token: 	_this.get('controllers.facebook.facebook_access_token')}

							var promise = _this.authenticate('/auth/facebook', 'post', data);
							
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
					}else{
						_this.set('error', true);
					}
					_this.handleServerError(error);
				}
			);
		},

		//LOGIN via email, password
		emailLogin: function() {
			this.set('isProcessingLogin', true);
	
			var _this = this;
	
			var model = this.get('model');

	 		//Model Validations:
			model.validate()
			.then(function(){
				
				var data = model.getProperties('password');	

				//Username or Email?
				var email = model.get('email');
				if( email.indexOf("@") !== -1){
					data['email'] = email;
				}else{
					data['username'] = email;
				}


				return  _this.authenticate('/auth/user', 'post', data);
			})	
			.then(
				function() {
					_this.send('closeModal');
				},
				function(error) {	
					console.log("ERRROR", error);
					_this.set('isProcessingLogin', false);
					_this.set('showErrors', true);
					if( error.status === 409 ){
						_this.set('error409', true);
					}else{
						_this.set('error', true);
					}
				}
			);
	 	}
	}
});