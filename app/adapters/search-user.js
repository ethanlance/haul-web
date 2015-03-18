import ApplicationAdapter from './application'; 

import config from '../config/environment';
var Haul = config.APP;

export default ApplicationAdapter.extend({
	
	host: Haul.Server.SEARCH_SERVER_HOST,
 
	findQuery: function(store, type, query) {
        var url = this.host + "/search/users";
        query['query'] = "query=" + query.q; 
        url = this.queryBuilder(query, url);
        return this.ajax(url, 'GET');
    },
});