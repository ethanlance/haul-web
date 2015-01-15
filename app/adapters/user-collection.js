import ApplicationAdapter from './application'; 

import config from '../config/environment';
var Haul = config.APP;

var UserCollectionAdapter = ApplicationAdapter.extend({
	
	host: Haul.Server.STORE_SERVER_HOST,
	
	find: function(store, type, user_id) { 
        var url = this.host + "/users/" + user_id + "/stores"; 
        return this.ajax(url, 'GET');
    },

	findQuery: function(store, type, query) { 
        var url = this.host + "/users/" + query.user_id + "/stores"; 
        return this.ajax(url, 'GET');
    }
});
export default UserCollectionAdapter;