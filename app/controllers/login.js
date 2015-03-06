import Ember from 'ember';
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
			.then(function(response){
				var data = { 
					fb_user_id: response.fb_user_id, 
					fb_token: 	response.fb_token
				}
				return  _this.authenticate('/auth/facebook', 'post', data);
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