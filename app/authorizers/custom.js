import Base from 'simple-auth/authorizers/base';
import Configuration from '../config/environment';
export default Base.extend({

	init:function(){
		console.log("INITIALIZING AUTHORIZOR")
		//jqXHR.setRequestHeader('Authorization', 'Bearer ' + Configuration.APP.Server.ClIENT_TOKEN);

		// this.get('session').on('authorizationFailed', function() {
		// 	console.log("KRRRRRRRRAAAAPOW")
		// })
	},

	authorize: function(jqXHR, requestOptions) {
		var accessToken = this.get('session.access_token');

		console.log("AUTHORIZERSSSSSSSSSSS" , accessToken)

		if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
			jqXHR.setRequestHeader('Authorization', 'Bearer ' + accessToken);
		}
	}
});