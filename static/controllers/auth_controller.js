// Load the SDK asynchronously
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

/*global Products, Ember */
(function () {

	//AUTHENTICATE
	//AuthController makes API Calls to Haul
	Haul.AuthController = Ember.ObjectController.extend({
		needs: ['facebook'],
		//Turn this off:
		email: null, //'ethan@haul.io',
		password: null, //'Bailey007!',
		client_token: Haul.CLIENT_TOKEN,
		host: Haul.USER_SERVER_HOST,
		 
		isProcessing: false, 
		attemptedTransition: null, 
		currentUser: false, 

		init: function() { 
			this._super();

			var promise = this.store.find('local-user');
			var _this = this;
			promise.then(function(result) {
				if(Ember.isEmpty(result)) { 
					_this.set('currentUser', false); 
				}else{ 
					_this.set('currentUser', result.get('firstObject')); 
				}
			}, function(error) {
				console.log("ERROR", errror);
			});
		},

		resetHeader: function() { 

			if( !this.currentUser )
				return;

			var accessToken = this.currentUser.get('access_token');

			Haul.ApplicationAdapter.reopen({
				headers: {
					'Authorization': 'Bearer ' + accessToken, 
  				},
  				currentUser: this.currentUser
			});
		}.observes('currentUser'),


		deAuthenticateLocalUser: function(cb) {

			this.set('currentUser', false);
			Ember.$.ajaxSetup({
				headers: {
					'Authorization': 'Bearer none'
				}
			});			

			//Remove user from localstorage
			var promise = this.store.find('local-user'); 
			promise.then(function( results ){ 

				if(Ember.isEmpty(results)) {
					if(cb) {
						return cb();	
					}
				}

				results.forEach(function(localUser) {
					localUser.deleteRecord();
				
					localUser.save().then(
						function(result) {  
							if(cb) {
								return cb();
							}
						},
						function(error){
							console.log("Error" , error);
						}
					);
				});


			}, function(error) {
				console.log("ERROR", error);
			});
		},

		authenticateLocalUser: function(user, accessToken, refreshToken, attemptedTrans) {
 
			//Local login is a callback.
			var _this = this;
			function cb(){
				//LOCAL STORAGE USER
				var localUser = _this.store.createRecord("local-user", 
					{
						id: user.get('id'), 
						name: user.get('name'),
						slug: user.get('slug'),
						picture: user.get('picture'),	
						access_token: accessToken,
						refresh_token: refreshToken,
						current: true
					}
				);
				localUser.save().then(function(lu) { 
					_this.set('currentUser', lu);	
				}, function(error) {
					console.log("ERROR", error);
				});

				//TRANSITION:
				if(Ember.isEmpty(attemptedTrans)){ 
					_this.transitionToRoute("seller", user);
				}else{
					_this.transitionToRoute(attemptedTrans);
				}
			}

			//First LOGOUT any previous User
			this.deAuthenticateLocalUser(cb);

		},


		authenticateByFB: function(response) {
			var _this = this;
			var facebookController =this.get('controllers.facebook');
			var data = {fb_user_id: facebookController.get('userID'), fb_token: facebookController.get('accessToken')}
			return Ember.$.ajax({
					url: _this.get('host') + '/auth/facebook',
					type: 'post',
					data: data,
					headers: {
						Authorization: 'Bearer client_' + _this.get('client_token')
					},
					dataType: 'json'
			}).then(

				function(response) {
					console.log("LOGGED IN", response); 

					//Auth Controller:  
					_this.send('setupUser', response);
				}, 

				//ERROR HANDLE
				function(error) {
					return new Error(error);
				}
			);
		},




		actions: { 
 			
			setupUser: function(response) {

				console.log(response);
									
				this.set('isProcessing', false);

				attemptedTrans = this.get('attemptedTransition'); 
				
				var accessToken = response.data[0].token_id;
				var refreshToken =response.data[1].token_id; 
				
				var user_id = response.data[0].user_id; 

				//Now get the user:
				var _this = this;
				this.store.find('user', user_id).then( 
					function(user) {
						_this.authenticateLocalUser(user, accessToken, refreshToken, attemptedTrans);
					}, function(error) {
						console.log("ERROR", error);
					} 
				);
			}
		}
	});
	

	//FacebookController makes API Calls to Facebook
	Haul.FacebookController = Ember.ObjectController.extend({
		needs: ['signup'],

		FB: {},

		redirect: false,

		accessToken: null,
		userID: null,


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


		getFBUser: function(cb) {
			var _this = this;
	  		//ME
			this.FB.api('/me', {fields: 'first_name,last_name,email'}, function(response) { 
				var data =  {
					email: response.email,
					firstname: response.first_name,
					lastname: response.last_name,
					fb_user_id: _this.get('userID'),
					fb_token: _this.get('accessToken')
				}
				return cb(data);
			});
		},

		//triggerFacebook
		// Starts the process of getting a users FB Data.
		// Then passes the data to Haul API to create a user.
		triggerFacebook: function() {

			var _this = this;

			return new Promise(function(resolve, reject) {

				_this.FB.getLoginStatus(function(response) {

					if (response.status !== 'connected' || response.status === 'not_authorized') {
						return _this.FB.login(function(response){
						  	if (response.authResponse) {


								//Set the userId & accessToken
						  		_this.set('userID', response.authResponse.userID);
						  		_this.set('accessToken', response.authResponse.accessToken);
						  		
						  		return _this.getFBUser(function(data){
						  			resolve(data);
						  		});


						  	} else {
								console.log('User cancelled login or did not fully authorize.');
								reject();
						  	}
					  	}, {scope: 'email'});
					}else{
						//Set the userId & accessToken
				  		_this.set('userID', response.authResponse.userID);
				  		_this.set('accessToken', response.authResponse.accessToken);

						return _this.getFBUser(function(data){
							resolve(data);
						});
					}
				});
			});
		} 
	});

	/**
	* UI CONTROLLERS BELOW
	*	All the controllers bellow handle the UI.  
	*	They rely on AuthController and FacebookController to talk to APIs
	*
	*/

	// Sign Up form
	Haul.SignupController = Ember.ObjectController.extend({
		
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
				function(response) {
					_this.set('isProcessingFacebook', false);

					//NOW LOG FB USER INTO HAUL
					return _this.authController.authenticateByFB();

				},
				function(error) {
					_this.set('isProcessingFacebook', false);
					error.status == 409 ? _this.set('error409', true) : _this.set('error', true);
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
				function(response) {
					_this.set('isProcessingSubmit', false); 
					_this.set('emailRegistrationRequested', true);
				}, 

				function(error) {
					_this.set('isProcessingSubmit', false);
					error.status == 409 ? _this.set('error409', true) : _this.set('error', true);
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
				model.validate().then(function(result){
					_this.createUserByEmail(data);	
				}, function(error) {
					_this.set('isProcessingSignup', false);
					_this.set('showErrors', true);
				});
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
					function(response) {
						authController.send('setupUser', response);
					}, 

					function(error) {
						_this.set('isProcessing', false);
						_this.set('error', true);
					}
				);
			}
		}
	});


	//Forgot Password Form:  Enter email address to request a password reset token
	Haul.ForgotpasswordController = Ember.ObjectController.extend({
		
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
					function(response) {
						
						_this.set('isProcessing', false); 
						_this.set('emailSent', true);

						//TRANSITION:
						_this.set('emailRegistrationRequested', true);
						
					}, 

					function(error) {
							
						_this.set('isProcessing', false);

						if( error.status == 409 ){
							_this.set('error409', true);
						}else {
							_this.set('error', true);
						} 
					}
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
					function(response) {
						authController.send('setupUser', response);
					}, 

					function(error) {
						_this.set('isProcessing', false);
						_this.set('error', true);
					}
				);
			}
		}
	});




	// LOGIN
	Haul.AuthloginController = Ember.ObjectController.extend({
		
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

						if( error.status == 409 ){
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
						_this.set('error404', true);
						console.error("Failed!", error);
						this.set('isProcessingFacebook', false);
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
				model.validate().then(function(result){
					_this.loginByEmail(data);	
				}, function(error) {
					_this.set('isProcessingLogin', false);
					_this.set('showErrors', true);
				});
		 	}
		}
	});

}).call(this);