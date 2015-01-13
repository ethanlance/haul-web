import ApplicationAdapter from './application'; 

import config from '../config/environment';
var Haul = config.APP;

var CollectionIsFollowedByCountAdapter = ApplicationAdapter.extend({

	host: Haul.Server.FOLLOW_SERVER_HOST,

	find: function(store, type, id) { 
		var url = this.host + "/follows/stores/" + id + "/total";  
		return this.ajax(url, 'GET');
	}
});
export default CollectionIsFollowedByCountAdapter;