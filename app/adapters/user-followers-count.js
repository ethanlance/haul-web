import ApplicationAdapter from './application'; 

import config from '../config/environment';
var Haul = config.APP;

export default ApplicationAdapter.extend({

	host: Haul.Server.FOLLOW_SERVER_HOST,

	find: function(store, type, id) { 
		console.log("WTF")
		var url = this.host + "/follows/users/" + id + "/total";  
		return this.ajax(url, 'GET');
	}
});