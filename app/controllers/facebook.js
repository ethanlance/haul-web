// Load the SDK asynchronously
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

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

	facebookSetup: function() {

		var _this = this;

		function init() { 
			FB.init({
				appId	  : Config.Server.FACEBOOK_APP_ID,
				cookie	 : true,  // enable cookies to allow the server to access
				xfbml	  : true,  // parse social plugins on this page
				version	: 'v2.1' // use version 2.1
		  	});
		  _this.set("FB", window.FB);
		}

		if(window.FB) {
			init();
		} else {
			window.fbAsyncInit = init;
		}

	}.on('init'),


	getFBUser: function(cb) {
		var _this = this;
		this.get('FB').api('/me', {fields: 'first_name,last_name,email'}, function(response) { 
			var data =  {
				email: response.email,
				firstname: response.first_name,
				lastname: response.last_name,
				fb_user_id: _this.get('userID'),
				fb_token: _this.get('accessToken')
			};
			return cb(data);
		});
	},

	//triggerFacebook
	// Starts the process of getting a users FB Data.
	// Then passes the data to Haul API to create a user.
	triggerFacebook: function() {

		var _this = this;

		var FB = this.get("FB");
		
		return new Ember.RSVP.Promise(function(resolve, reject) {

			return FB.login(function(response){
			  	if (response.authResponse) {

					//Set the userId & accessToken
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
	},

	// authenticateByFB: function() {
	// 	var _this = this;
	// 	var data = {fb_user_id: this.get('userID'), fb_token: this.get('accessToken')};
	// 	return Ember.$.ajax({
	// 		url: _this.get('host') + '/auth/facebook',
	// 		type: 'post',
	// 		data: data,
	// 		headers: {
	// 			Authorization: 'Bearer ' + _this.get('client_token')
	// 		},
	// 		dataType: 'json'
	// 	});
	// },
});