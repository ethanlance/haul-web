import ApplicationAdapter from './application'; 

export default ApplicationAdapter.extend({

	host: function(){
		return this.ENV.Server.FOLLOW_SERVER_HOST;	
	}.property(), 

	findQuery: function(store, type, query) {
		var url = this.get('host') + "/follows/users/" + query.user_id;
		url = this.queryBuilder(query, url);
		return this.ajax(url, 'GET');
	}
});