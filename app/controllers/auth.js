import Ember from 'ember';

import config from '../config/environment';
var Config = config.APP;


// Load the SDK asynchronously
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));




var AuthController = Ember.ObjectController.extend({

	needs: ['facebook'],
	//Turn this off:
	email: null, //'ethan@haul.io',
	password: null, //'Bailey007!',
	client_token: Config.Server.CLIENT_TOKEN,
	host: Config.Server.USER_SERVER_HOST,
	 
	isProcessing: false, 
	attemptedTransition: null, 
 

	authenticateByFB: function() {
		var _this = this;
		var facebookController = this.get('controllers.facebook');
		var data = {fb_user_id: facebookController.get('userID'), fb_token: facebookController.get('accessToken')};
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
				//Auth Controller:  
				_this.setupUser(response);
			}, 

			//ERROR HANDLE
			function(error) {
				return error;
			}
		);
	},
		
	setupUser: function(response) {
							
		this.set('isProcessing', false);

		var attemptedTrans = this.get('attemptedTransition'); 
		
		var accessToken = response.data[0].token_id;
		var refreshToken =response.data[1].token_id; 
		var user_id = response.data[0].user_id; 
 
		//Now get the user:
		var _this = this;
		return this.store.find('user', user_id).then( 
			function(user) {

				//Save session.
				return _this.get('session').authenticate('authenticator:custom', 
					{
						'userId':user.id, 
						'accessToken':accessToken, 
						'refreshToken':refreshToken 
					}
				).then(function(){ 
					if(Ember.isEmpty(attemptedTrans)){  
						_this.transitionToRoute("seller", user);
					}else{
						_this.transitionToRoute(attemptedTrans);
					}	
				}, function(error){ 
					return error;
				});

			}, function(error) {
				return error;
			} 
		);
	} 
});
export default AuthController;
