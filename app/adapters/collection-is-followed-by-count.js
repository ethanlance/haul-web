import ApplicationAdapter from './application'; 
/* global Haul */

var CollectionIsFollowedByCountAdapter = ApplicationAdapter.extend({

	host: Haul.Server.FOLLOW_SERVER_HOST,

	find: function(store, type, id) { 
		var url = this.host + "/follows/stores/" + id + "/total";  
		return this.ajax(url, 'GET');
	}
});
export default CollectionIsFollowedByCountAdapter;