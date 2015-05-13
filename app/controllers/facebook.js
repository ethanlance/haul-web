
import Ember from 'ember';
import config from '../config/environment';
var Config = config.APP;
/* global FB */

//FacebookController makes API Calls to Facebook
export default Ember.ObjectController.extend({
	
	FB: {},
 
	client_token: Config.Server.CLIENT_TOKEN,
	
	host: Config.Server.USER_SERVER_HOST,

	redirect: false,
	
	facebook_user_id: null,
	
	facebook_access_token: null,

	getFBUser: function(cb) {
		var _this = this;

		this.socialApiClient.load()
		.then(function(FB){

			FB.api('/me', {fields: 'first_name, last_name, email'}, function(response) { 
				console.log("FB RESPONSE", response);
				var data =  {
					email: response.email,
					firstname: response.first_name,
					lastname: response.last_name,
					fb_user_id: _this.get('facebook_user_id'),
					fb_token: _this.get('facebook_access_token')
				};
				return cb(data);
			});
		});
	},

	//triggerFacebook
	// Starts the process of getting a users FB Data.
	// Then passes the data to Haul API to create a user.
	triggerFacebook: function() {

		var _this = this;

		return this.socialApiClient.load()
		.then(function(FB){
		
			return new Ember.RSVP.Promise(function(resolve, reject) {

				FB.login(function(response){
				  	if (response.authResponse) {
				  		_this.set('facebook_user_id', response.authResponse.userID);
				  		_this.set('facebook_access_token', response.authResponse.accessToken);
				  		
				  		return _this.getFBUser(function(data){
				  			resolve(data);
				  		});

				  	} else {
						console.log('User cancelled login or did not fully authorize.');
						reject();
				  	}
			  	}, {scope: 'email'});	
			});
		});
	}
});