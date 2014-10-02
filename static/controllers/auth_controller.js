/*global Products, Ember */
(function () {

	//AUTHENTICATE
	Haul.AuthController = Ember.ObjectController.extend({

		//Turn this off:
		email: null, //'ethan@haul.io',
		password: null, //'Bailey007!',
		client_token: "5eed07b8d71cf26f6df6566cf705adaa",
		host: "http://localhost:8080",
		 
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

		//Did the access_token change?
		tokenChanged: (function() {
			if (Ember.isEmpty(this.get('token'))) { 
				Ember.$.removeCookie('access_token', {path: '/'});
				Ember.$.removeCookie('auth_user', {path: '/'});
			} else {
				Ember.$.cookie('access_token', this.get('token'), {path: '/'});
				Ember.$.cookie('auth_user', this.get('currentUser'), {path: '/'});

				//UPDATE HEADERS W/ ACCESS_TOKEN
				adapter = this.get('container').lookup('adapter:application');   
				adapter.set('headers', { 'Authorization': 'Bearer ' +  this.get('token') });
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

							_this.set("currentUser", user.getProperties('id', 'name', 'email'))

							user.get('apiKeys').content.push(key);

							//TRANSITION:
							if(Ember.isEmpty(attemptedTrans)){
								console.log(user);
								_this.transitionToRoute("go.profile", user);
							}else{
								_this.transitionToRoute(attemptedTrans);
							}
						}	;
					})(this)
				);
			}
		}
	});


	// SIGNUP
	Haul.AuthsignupController = Ember.ObjectController.extend({
		
		//Controller
		needs: ['auth'],

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

		actions: {
			submit: function() {
				
				var authController = this.get('controllers.auth');

				this.set('isProcessing', true);
				//AJAX CALL - for getting the User Token back.  
				//Pass params email/password to it.
				return Ember.$.ajax({
						url: authController.host + '/users/email',
						type: 'post',
						data: this.getProperties('email'),
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
	
	// CONFIRM EMAIL 
	Haul.AuthconfirmationController = Ember.ObjectController.extend({
		
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

				//AJAX CALL - for getting the User Token back.  
				//Pass params email/password to it.
				return Ember.$.ajax({
						url: authController.host + '/users/' + this.get('user_id') + "/ticket/" + this.get('ticket_id'),
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
		
		needs: ['auth'],

		error: false,
		error409: false,

		actions: {
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