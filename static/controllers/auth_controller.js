/*global Products, Ember */
(function () {


	Haul.AuthController = Ember.ObjectController.extend({

		//Turn this off:
		email: 'ethan@haul.io',
		password: 'Bailey007!',

		loginFailed: false,
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
			console.log("HERE");
			if (Ember.isEmpty(this.get('token'))) { 
				console.log("DELETE?")
				Ember.$.removeCookie('access_token', {path: '/'});
				Ember.$.removeCookie('auth_user', {path: '/'});
			} else {
				console.log("SAVE");
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
 
			loginUser: function() {
				var data, token, key;
				this.set('isProcessing', true);

        		attemptedTrans = this.get('attemptedTransition');

				data = this.getProperties('email', 'password');

				//AJAX CALL - for getting the User Token back.  
				//Pass params email/password to it.
				return Ember.$.ajax({
						url: 'http://localhost:8080/auth/user',
						type: 'post',
						data: data,
						headers: {
							Authorization: 'Bearer client_5eed07b8d71cf26f6df6566cf705adaa'
						},
						dataType: 'json'
				})


				.then(
					(function(_this) {
					return function(response) {
						
						_this.set('isProcessing', false);

						//Create an apiKey
					 	key = _this.get('store').createRecord('apiKey', {
							accessToken: response.data[0].id
						});

					 	//Save Our User Token.
						_this.set('token', response.data[0].id); 
						
						var user_id = response.data[0].user_id; 

						user = _this.store.find('user', user_id);
						
 						
 						//Now get the user:
						_this.store.find('user', user_id).then(function(user) {
							

							_this.set("currentUser", user.getProperties('id', 'name', 'email'))
						
							user.get('apiKeys').content.push(key);

							//TRANSITION:
							if(Ember.isEmpty(attemptedTrans)){
								_this.transitionTo("products.index");
							}else{
								console.log("Trans  " + _this.token);
								console.log(attemptedTrans);
								//_this.transitionTo("products.index");
								_this.transitionToRoute(attemptedTrans);
							}
						});
					};
					})(this), 

					(function(_this){
						return function(error) {
							
							_this.set('isProcessing', false);

							if (error.status === 401) {
					 	 		console.log("wrong user or password, please try again");
								_this.set('loginFailed', true)
							}
						};
					})(this)
				);
		 	}
		}
	});
}).call(this);