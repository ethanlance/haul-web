import ApplicationAdapter from './application'; 

import config from '../config/environment';
var Haul = config.APP;

export default ApplicationAdapter.extend({
	
	host: Haul.Server.FEED_SERVER_HOST, 

	findQuery: function(store, type, query) {
        var url = this.host + "/feeds/users/" + query.user_id;
        return this.ajax(url, 'GET');
    }
});