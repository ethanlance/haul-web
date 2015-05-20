import Base from 'simple-auth/authorizers/base';
import Configuration from '../config/environment';
export default Base.extend({

	authorize: function(jqXHR, requestOptions) {console.log("KABOOOOOM")
		var accessToken = this.get('session.access_token');
		if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
			jqXHR.setRequestHeader('Authorization', 'Bearer ' + accessToken);
		}
	}
});