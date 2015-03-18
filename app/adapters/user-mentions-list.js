import ApplicationAdapter from './application'; 
import config from '../config/environment';
var Haul = config.APP;

export default ApplicationAdapter.extend({

	host: Haul.Server.COMMENT_SERVER_HOST,

	findQuery: function(store, type, query) {
		var url = this.host + "/users/" + query.user_id + "/comments";
		url = this.queryBuilder(query, url);
		return this.ajax(url, 'GET');
	}
});