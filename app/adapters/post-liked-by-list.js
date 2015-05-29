import ApplicationAdapter from './application'; 

export default ApplicationAdapter.extend({

	host: function(){
		return this.ENV.Server.WANT_SERVER_HOST;	
	}.property(), 

	find: function(store, type, id) {
		var url = this.get('host') + "/likes/posts/" + id;
		return this.ajax(url, 'GET');
	},

	findQuery: function(store, type, query) {
		var url = this.get('host') + "/likes/posts/" + query.id;
		url = this.queryBuilder(query, url);
		return this.ajax(url, 'GET');
	}
});