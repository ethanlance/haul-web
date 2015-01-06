import ApplicationAdapter from './application';

var UserIsFollowingCountAdapter = ApplicationAdapter.extend({

	host: Haul.Server.FOLLOW_SERVER_HOST,

	find: function(store, type, id) { 
		var url = this.host + "/users/" + id + "/follows/total";  
		return this.ajax(url, 'GET');
	}
});
export default UserIsFollowingCountAdapter;