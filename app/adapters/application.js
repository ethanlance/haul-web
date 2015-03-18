import DS from 'ember-data'; 
import config from '../config/environment';
export default DS.RESTAdapter.extend({
	
	currentUserBinding: 'Haul.currentUser',
	accessTokenBinding: 'Haul.currentUser.access_token',

	queryBuilder: function(query, url) {
		var queryList = [];

		if( query.doNotPaginate){

			url = url + "?limit=1";

			if(query.query) {
				url + "&"+query.query;
			}

			return url;
		}

        if( query.query ) {
            queryList.push(query.query);
        }

        if( query.next ) {
            queryList.push("next=" + query.next);
        }
        if( query.limit ) {
            queryList.push("limit=" + query.limit);
        }
        if( query.previous ) {
            queryList.push("previous=" + query.previous);
        }
        if( query.offset ) {
            queryList.push("offset=" + query.offset);
        }
        if(!Ember.isEmpty(queryList)) {
            url = url + "?" + queryList.join("&");
        }
		
		return url;
	},

  	headers: function() {
  		var token;
  		if(Ember.isEmpty(this.get('accessToken'))){
  			token = config.APP.Server.CLIENT_TOKEN;
  		}else{
  			token = this.get('accessToken');
  		}
	
    	return {
      		"Authorization": 'Bearer ' + token
    	};
	}.property().volatile(),

	ajaxError: function(jqXHR) {
	    var error = this._super(jqXHR);
		
		//Unauthorized!
		if (error.status === 401) {
			var auth = this.container.lookup('simple-auth-session:main');
			auth.trigger('authorizationFailed');
			return error;
		} else {
			return error;
		}
	}

}); 