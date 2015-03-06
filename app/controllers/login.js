import Ember from 'ember';
import DS from 'ember-data';
import ApplicationAdapter from '../adapters/application';
import config from '../config/environment';
var Config = config.APP;

export default Ember.ObjectController.extend({
	
	needs: ['facebook'],
 
	client_token: Config.Server.CLIENT_TOKEN,
	host: Config.Server.USER_SERVER_HOST,

	error: false,
	error404: false,
	error409: false,
	isProcessingFacebook: false, 
	isProcessingLogin: false,

	reset: function() {
		this.set('error', false);
		this.set('error404', false);
		this.set('error409', false);
		this.set('isProcessingFacebook', false);
		this.set('isProcessingLogin', false);
	},

	/**
		The user is now authenticated.
		Check that the user has set a username.  
			If not present user with the form to create a username.
			Otherwise, send the user to the route to which they want to go.
	**/	
	startUserSession: function(response) {
		console.log("Start user session", response);
		var _this = this;
		var accessToken = response.data[0].token_id;
		var refreshToken =response.data[1].token_id; 
		var currentUserId = response.data[0].user_id;  

		_this.store.find('user', currentUserId)
		.then(function(user) {			
			_this.get('session').set('currentUser', user);

			if( !Ember.isEmpty(user.get('username'))){
				var attemptedTrans = _this.get('attemptedTransition'); 
				if(Ember.isEmpty(attemptedTrans)){  
					return _this.transitionToRoute("profile", user.get('username')  );
				}else{
					return _this.transitionToRoute(attemptedTrans);
				}
			} else {
				return _this.transitionToRoute("signupusername");
			}
		});
	},

	authenticate: function(api, type, data) {
		var host = this.get('host'); 

		return this.get('session').authenticate('authenticator:custom',{url: api, type:type, host: host, data: data});
	},

	actions: {

		//LOGIN via FB token
		facebookLogin: function() {
			this.set('isProcessing', true);
			var _this = this;
		
			this.get('controllers.facebook').triggerFacebook()
			.then(function(){
				var data = { 
					fb_user_id: _this.get('controllers.facebook.facebook_user_id'), 
					fb_token: 	_this.get('controllers.facebook.facebook_access_token')}
				return  _this.authenticate('/auth/facebook', 'post', data);
			})
			.then(function(response){

				console.log("RESPONSE FROM AUTHENTICATOR", response);

				return _this.startUserSession(response);
			})
			.then(
		 		function onFulfill(response) {
					_this.set('isProcessingFacebook', false);
					return console.log("Success!", response); 
				}, 
				function onReject(error) {
					_this.set('error404', true);
					_this.set('isProcessingFacebook', false);
					console.error("Failed!", error);
				}
			);
		},

		//LOGIN via email, password
		emailLogin: function() {
			this.set('isProcessingSubmit', true);

			//Get the following from user submitted form.
			var data = this.getProperties('email', 'password');	
			var _this = this;
			var model = this.get('model');

	 		//Model Validations:
			model.validate()
			.then(function(){
				return  _this.authenticate('/auth/user', 'post', data);
			})	
			.then(function(response){
				return _this.startUserSession(response);
			})
			.then(
				function() {},
				function(error) {	
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