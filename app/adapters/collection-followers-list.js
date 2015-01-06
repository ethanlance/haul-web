import ApplicationAdapter from './application'; 

var CollectionFollowersListAdapter = ApplicationAdapter.extend({

	host: Haul.Server.FOLLOW_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/follows/stores/" + id;
		return this.ajax(url, 'GET');
	}
});
export default CollectionFollowersListAdapter;