import ApplicationAdapter from './application';

import config from '../config/environment';
var Haul = config.APP;

export default ApplicationAdapter.extend({

	host: Haul.Server.POST_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/users/" + id + "/posts/total";  
		return this.ajax(url, 'GET');
	}
});