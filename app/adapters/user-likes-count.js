import ApplicationAdapter from './application'; 
/* global Haul */

var UserLikesCountAdapter = ApplicationAdapter.extend({

	host: Haul.Server.WANT_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/users/" + id + "/likes/total";  
		return this.ajax(url, 'GET');
	}
});
export default UserLikesCountAdapter;