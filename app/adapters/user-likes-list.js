import ApplicationAdapter from './application'; 

import config from '../config/environment';
var Haul = config.APP;

var UserLikesListAdapter = ApplicationAdapter.extend({

	host: Haul.Server.WANT_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/users/" + id + "/likes";
		return this.ajax(url, 'GET');
	}
});
export default UserLikesListAdapter;