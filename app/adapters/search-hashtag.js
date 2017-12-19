import ApplicationAdapter from './application'; 

export default ApplicationAdapter.extend({
	
	host: function(){
		return this.ENV.Server.SEARCH_SERVER_HOST;	
	}.property(), 

	findQuery: function(store, type, query) {
        var url = this.get('host') + "/search/tags"; 
        query['query'] = "query=" + query.q; 
        url = this.queryBuilder(query, url);
        return this.ajax(url, 'GET');
    },
});