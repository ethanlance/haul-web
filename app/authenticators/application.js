import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

var HaulAuthenticator = Base.extend({

	restore: function (data) {
		return new Ember.RSVP.Promise(function (resolve, reject) {
			if (!Ember.isEmpty(data.access_token)) {
				resolve(data);
			} else {
				reject();
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
export default HaulAuthenticator;