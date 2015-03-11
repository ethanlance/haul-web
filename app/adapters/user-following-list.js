import ApplicationAdapter from './application'; 
import config from '../config/environment';
var Haul = config.APP;

export default ApplicationAdapter.extend({

	host: Haul.Server.FOLLOW_SERVER_HOST,

	findQuery: function(store, type, query) {
		var url = this.host + "/users/" + query.user_id + "/follows";
		url = this.queryBuilder(query, url);
		return this.ajax(url, 'GET');
	}
});