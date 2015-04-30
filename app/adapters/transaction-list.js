import ApplicationAdapter from './application'; 

export default ApplicationAdapter.extend({
	
	host: function(){
		return this.ENV.Server.PROSPER_SERVER_HOST;	
	}.property(), 

	findQuery: function(store, type, query) {
        var url = this.get('host') + "/users/" + query.user_id + "/transactions?context=buyer";
        url = this.queryBuilder(query, url);
        return this.ajax(url, 'GET');
    }

});