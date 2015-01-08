import ApplicationAdapter from './application'; 
/* global Haul */
var UserIsFollowedByCountAdapter = ApplicationAdapter.extend({

	host: Haul.Server.FOLLOW_SERVER_HOST,

	find: function(store, type, id) { 
		var url = this.host + "/follows/users/" + id + "/total";  
		return this.ajax(url, 'GET');
	}
});
export default UserIsFollowedByCountAdapter;