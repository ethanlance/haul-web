import ApplicationAdapter from './application'; 
import config from '../config/environment';
var Haul = config.APP;

export default ApplicationAdapter.extend({
	
	host: Haul.Server.SEARCH_SERVER_HOST, 
	findQuery: function(store, type, query) {
        var url = this.host + "/search/tags/" + query.q + "/posts";
        url = this.queryBuilder(query, url);
        return this.ajax(url, 'GET');
    },
});