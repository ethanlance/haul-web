import ApplicationAdapter from './application'; 


var UserCollectionAdapter = ApplicationAdapter.extend({
	
	host: Haul.Server.STORE_SERVER_HOST,

	findQuery: function(store, type, query) { 
        var url = this.host + "/users/" + query.user_id + "/stores"; 
        return this.ajax(url, 'GET');
    }
});
export default UserCollectionAdapter;