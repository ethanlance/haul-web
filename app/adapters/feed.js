import ApplicationAdapter from './application'; 

export default ApplicationAdapter.extend({
	
	host: function(){
		return this.ENV.Server.FEED_SERVER_HOST;	
	}.property(), 

	findQuery: function(store, type, query) {
        var url = this.get('host') + "/feeds/users/" + query.user_id;
        url = this.queryBuilder(query, url);
        return this.ajax(url, 'GET');
    }
});