import ApplicationAdapter from './application'; 
/* global Haul */
var UserFollowsListAdapter = ApplicationAdapter.extend({

	host: Haul.Server.FOLLOW_SERVER_HOST,

	findQuery: function(store, type, query) {
        var url = this.host + "/users/" + query.id + "/follows";
        return this.ajax(url, 'GET');
    },

	// find: function(store, type, id) {
	// 	var url = this.host + "/users/" + id + "/follows";
	// 	return this.ajax(url, 'GET');
	// }
});
export default UserFollowsListAdapter;