import ApplicationAdapter from './application'; 

import config from '../config/environment';
var Haul = config.APP;

var UserIsFollowedByCountAdapter = ApplicationAdapter.extend({

	host: Haul.Server.FOLLOW_SERVER_HOST,

	find: function(store, type, id) { 
		var url = this.host + "/follows/users/" + id + "/total";  
		return this.ajax(url, 'GET');
	}
});
export default UserIsFollowedByCountAdapter;