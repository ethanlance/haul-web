import DS from 'ember-data'; 
import config from '../config/environment';
export default DS.RESTAdapter.extend({
	
	currentUserBinding: 'Haul.currentUser',
	accessTokenBinding: 'Haul.currentUser.access_token',

  	headers: function() {
  		var token;
  		if(Ember.isEmpty(this.get('accessToken'))){
  			token = config.APP.Server.CLIENT_TOKEN;
  		}else{
  			token = this.get('accessToken');
  		}
	
		console.log("NOW USING AUTHORIZATION BEARER " +token);

    	return {
      		"Authorization": 'Bearer ' + token
    	};
	}.property().volatile(),

	ajaxError: function(jqXHR) {
	    var error = this._super(jqXHR);
		
		//Unauthorized!
		if (error.status === 401) {

			console.log("TRIGGER 401 ")
			
			var auth = this.container.lookup('simple-auth-session:main');
			auth.trigger('authorizationFailed');
			
			return error;
		} else {
			return error;
		}
	}

}); 