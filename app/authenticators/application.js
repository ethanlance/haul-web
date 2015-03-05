import Ember from 'ember';
import SimpleAuthBase from 'simple-auth/authenticators/base';
import config from '../config/environment';
export default SimpleAuthBase.extend({

	restore: function (data) {
		var _this = this;
		
		return new Ember.RSVP.Promise(function (resolve, reject) {
			if (!Ember.isEmpty(data.access_token)) {
				resolve(data);
			} else {

				Ember.$.ajax({
					url: config.APP.Server.USER_SERVER_HOST + '/auth/refresh',
					type: 'post',
					data: {client_id:config.APP.Server.CLIENT_ID},
					headers: {
						Authorization: 'Bearer ' + data.refresh_token
					},
					dataType: 'json'
				}).then(

					function(response){

						_this.authenticate({
							accessToken: response.data[0].token_id,
							refreshToken: response.data[1].token_id, 
							currentUserId: response.data[0].user_id
						}).then(
							function(){
								data['access_token'] = response.data[0].token_id;
								data['refresh_token'] = response.data[1].token_id;
								return resolve(data);	
							},
							function(){
								return reject();
							}
						);
					},
					function(error){
						return reject();
					}
				);				
			}
		});
	},

	authenticate: function(options) { 
	 
		var user_id = options.userId;
		var access_token = options.accessToken;
		var refresh_token = options.refreshToken; 

		return new Ember.RSVP.Promise(function(resolve) {
			resolve({access_token:access_token, refresh_token:refresh_token, user_id: user_id});
		});
	}
});