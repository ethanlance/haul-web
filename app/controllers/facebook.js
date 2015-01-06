import Ember from 'ember';
import app from '../app'; 

/* global FB */

//FacebookController makes API Calls to Facebook
var FacebookController = Ember.ObjectController.extend({
	

	FB: {},

	redirect: false,

	accessToken: null,
	userID: null,

	facebookSetup: function() {

		
		var _this = this;

		function init() { 
			FB.init({
				appId	  : Haul.FACEBOOK_APP_ID,
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
  		//ME
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
		});
	} 
});
export default FacebookController;