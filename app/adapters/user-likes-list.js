import ApplicationAdapter from './application'; 

var UserLikesListAdapter = ApplicationAdapter.extend({

	host: Haul.Server.WANT_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/users/" + id + "/likes";
		return this.ajax(url, 'GET');
	}
});
export default UserLikesListAdapter;