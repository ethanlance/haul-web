// Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



/*global Products, Ember */
(function () {

	//AUTHENTICATE
	Haul.AuthController = Ember.ObjectController.extend({

		//Turn this off:
		email: null, //'ethan@haul.io',
		password: null, //'Bailey007!',
		client_token: Haul.CLIENT_TOKEN,
		host: Haul.USER_SERVER_HOST,
		 
		isProcessing: false, 
		attemptedTransition: null,
		token: "",
		currentUser: {},
		name:"",

		init: function() { 
			this._super();
 
			if (Ember.$.cookie('access_token')) { 
				this.token = Ember.$.cookie('access_token');
				this.currentUser = Ember.$.cookie('auth_user');
			}
		},

		resetHeader: function() {
			Haul.ApplicationAdapter.reopen({
				headers: {
					'Authorization': 'Bearer ' + this.get('token'), 
  				}
			});
		},

		//Did the access_token change?
		tokenChanged: (function() {
			if (Ember.isEmpty(this.get('token'))) { 
				Ember.$.removeCookie('access_token', {path: '/'});
				Ember.$.removeCookie('auth_user', {path: '/'});
			} else {
				Ember.$.cookie('access_token', this.get('token'), {path: '/'});
				Ember.$.cookie('auth_user', this.get('currentUser'), {path: '/'});

				this.resetHeader();
			}
		}).observes('token'),


		//Did the access_token change?
		currentUserChanged: (function() {
			if (Ember.isEmpty(this.get('currentUser'))) {  
				Ember.$.removeCookie('auth_user');
			} else { 
				Ember.$.cookie('auth_user', this.get('currentUser'), {path: '/'});
			}
		}).observes('currentUser'),	


		reset: function() {
		  this.setProperties({
			name: null,
			token: null,
			currentUser: null
		  });
		  Ember.$.ajaxSetup({
			headers: {
			  'Authorization': 'Bearer none'
			}
		  });
		},

		actions: { 
 			
			authResponse: function(response) {

				console.log(response);
									
				this.set('isProcessing', false);

				attemptedTrans = this.get('attemptedTransition');

				//Create an apiKey
			 	key = this.get('store').createRecord('apiKey', {
					accessToken: response.data[0].id
				});

			 	//Save Our User Token.
				this.set('token', response.data[0].token_id); 
				
				var user_id = response.data[0].user_id; 

					//Now get the user:
				this.store.find('user', user_id).then(
					(function(_this) {
						return function(user) {

							_this.set("currentUser", user.getProperties('id', 'slug', 'name', 'email'))

							user.get('apiKeys').content.push(key);

							//TRANSITION:
							if(Ember.isEmpty(attemptedTrans)){ 
								_this.transitionToRoute("products", user);
							}else{
								_this.transitionToRoute(attemptedTrans);
							}
						}	;
					})(this)
				);
			}
		}
	});
	

	//AUTHENTICATE
	Haul.FacebookController = Ember.ObjectController.extend({

		FB: {},

		redirect: false,

		facebookSetup: function() {

		  window.fbAsyncInit = (function() {
			  FB.init({
				appId	  : Haul.FACEBOOK_APP_ID,
				cookie	 : true,  // enable cookies to allow the server to access
									// the session
				xfbml	  : true,  // parse social plugins on this page
				version	: 'v2.1' // use version 2.1
			  });
			  this.FB = FB;
			}).bind(this);


		}.on('init'),

		// Now that we've initialized the JavaScript SDK, we call
		// FB.getLoginStatus().  This function gets the state of the
		// person visiting this page and can return one of three states to
		// the callback you provide.  They can be:
		//
		// 1. Logged into your app ('connected')
		// 2. Logged into Facebook, but not your app ('not_authorized')
		// 3. Not logged into Facebook and can't tell if they are logged into
		//	your app or not.
		//
		// These three cases are handled in the callback function.
		checkLoginState: function() {
			console.log(this.FB);
			this.FB.getLoginStatus(function(response) {
				this.statusChangeCallback(response);
			}.bind(this));
		},

		statusChangeCallback: function(response) {
			// The response object is returned with a status field that lets the
			// app know the current login status of the person.
			// Full docs on the response object can be found in the documentation
			// for FB.getLoginStatus().
			if (response.status === 'connected') {
				// Logged into your app and Facebook.
				this.getFBAccessToken();
				this.getFBUserData();
			} else if (response.status === 'not_authorized') {
				console.log("not authorized");
				this.FB.login();
			} else {
				console.log("not loggeg in");
			  // The person is not logged into Facebook, so we're not sure if
			  // they are logged into this app or not.
			  this.FB.login(function(response){
				  if (response.authResponse) {
						this.getFBUserData();
				  } else {
						console.log('User cancelled login or did not fully authorize.');
				  }

			  }.bind(this));
			}
		},

		getFBAccessToken: function() {
		  this.fbAccessToken = this.FB.getAccessToken();
		},

		getFBUserData: function() {
		  
			this.FB.api('/me', function(response) { 
				alert("FB complete. Check console log. Need to hook up to Haul API and then transition to a route")
				console.log(response); 
			}.bind(this));
		}

	});



	// Sign Up form
	Haul.SignupController = Ember.ObjectController.extend({
		
		//Controller
		needs: ['auth', 'facebook'],

		//Template Keys
		emailRegistrationRequested: false,
		isProcessing: false,
		error409: false,
		error: false,

		//Hide API Errors when changes are made to email field.
		emailChanged: (function() {	
			this.set('error', false);
			this.set('error409', false);
		}).observes('email'),

		startFacebook: function(){
			var facebookController = this.get('controllers.facebook');
		}.on('init'),


		actions: {

			facebookSignup: function() { 
				var facebookController = this.get('controllers.facebook'); 
				facebookController.checkLoginState();
			},

			submit: function() {
				
				var authController = this.get('controllers.auth');

				this.set('isProcessing', true);

				var data = this.getProperties('email');
				data['action'] = 'email-register';

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
					(function(_this) {
					return function(response) {
						
						_this.set('isProcessing', false); 

						//TRANSITION:
						_this.set('emailRegistrationRequested', true);
						
					};
					})(this), 

					(function(_this){
						return function(error) {
							
							_this.set('isProcessing', false);

							if( error.status == 409 ){
								_this.set('error409', true);
							}else {
								_this.set('error', true);
							}
						};
					})(this)
				);
			}
		}
	});
	
	// Sign Up Confirm Form
	Haul.SignupconfirmController = Ember.ObjectController.extend({
		
		//Controllers
		needs: ['auth'],

		queryParams: ['ticket_id', 'user_id'],

		//Template Keys
		ticket_id: null,
		user_id: null,
		isProcessing: false, 
		error: false,
		

		actions: {
			submit: function() {
				var authController = this.get('controllers.auth');

				this.set('isProcessing', true);

				data = this.getProperties('firstname', 'lastname', 'password');

				//data['action'] = 'email-register';

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
					(function(_this) {
						return function(response) {
							authController.send('authResponse', response);
						}
					})(this), 

					(function(_this){
						return function(error) {
							_this.set('isProcessing', false);
							_this.set('error', true);
						};
					})(this)
				);
			}
		}
	});


	//Forgot Password Form:  Enter email address to request a password reset token
	Haul.ForgotpasswordController = Ember.ObjectController.extend({
		
		//Controllers
		needs: ['auth'],
		
		emailSent: false,
		email: null,
		isProcessing: false, 
		error: false,
		emailRegistrationRequested:false,


		actions: {
			submit: function() { 
				var authController = this.get('controllers.auth');

				this.set('emailSent', true);

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
					(function(_this) {
					return function(response) {
						
						_this.set('isProcessing', false); 

						//TRANSITION:
						_this.set('emailRegistrationRequested', true);
						
					};
					})(this), 

					(function(_this){
						return function(error) {
							
							_this.set('isProcessing', false);

							if( error.status == 409 ){
								_this.set('error409', true);
							}else {
								_this.set('error', true);
							}
						};
					})(this)
				);
			}
		}
	});

	//Forgot Password Confirm: Form to change a user password w/ ticket_id (token)
	Haul.ForgotpasswordconfirmController = Ember.ObjectController.extend({
		needs: ['auth'],

		queryParams: ['ticket_id', 'user_id'],

		//Template Keys
		ticket_id: null,
		user_id: null,
		isProcessing: false, 
		error: false,
		
		actions: {
			submit: function() {
				var authController = this.get('controllers.auth');

				this.set('isProcessing', true);

				data = this.getProperties('password');

				//data['action'] = 'password-reset';

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
					(function(_this) {
						return function(response) {
							authController.send('authResponse', response);
						}
					})(this), 

					(function(_this){
						return function(error) {
							_this.set('isProcessing', false);
							_this.set('error', true);
						};
					})(this)
				);
			}
		}
	});




	// LOGIN
	Haul.AuthloginController = Ember.ObjectController.extend({
		
		needs: ['auth', 'facebook'],

		error: false,
		error409: false,

		startFacebook: function(){
			var facebookController = this.get('controllers.facebook');
		}.on('init'),

		actions: {

			facebookLogin: function() {
				console.log("FACEBOOK CLICK")
				var facebookController = this.get('controllers.facebook'); 
				facebookController.checkLoginState();
			},

			submit: function() {
				var data, token, key;
				this.set('isProcessing', true);
 
				data = this.getProperties('email', 'password');

				var authController = this.get('controllers.auth');

				//AJAX CALL - for getting the User Token back.  
				//Pass params email/password to it.
				return Ember.$.ajax({
						url: authController.host + '/auth/user',
						type: 'post',
						data: data,
						headers: {
							Authorization: 'Bearer client_' + authController.client_token
						},
						dataType: 'json'
				}).then(
					(function(_this) {
						return function(response) {
							authController.send('authResponse', response);
						}
					})(this), 

					(function(_this){
						return function(error) {
							
							_this.set('isProcessing', false);

							if( error.status == 409 ){
								_this.set('error409', true);
							}else{
								_this.set('error', true);
							}
						};
					})(this)
				);
		 	}
		}
	});

}).call(this);