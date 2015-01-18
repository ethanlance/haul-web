import ApplicationAdapter from './application';

import config from '../config/environment';
var Haul = config.APP;

var UserAdapter = ApplicationAdapter.extend({
	
	host: Haul.Server.USER_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/users/" + id;
        return this.ajax(url, 'GET');
    },

	findQuery: function(store, type, query) {  
        var url = this.host + "/users/" + query.id;
        return this.ajax(url, 'GET');
    },   

    findMany: function(store, type, ids) { 
    	var url;
		if( ids.length < 2 ){
			url = this.host + "/users/" + ids[0];
			return this.ajax(url, 'GET');
		}else{	
			url = this.host + "/users";
			return this.ajax(url, 'GET', { data: { image_ids: ids } });
		}
	},
});
export default UserAdapter;