import ApplicationAdapter from './application'; 

import config from '../config/environment';
var Haul = config.APP;

var CollectionAdapter = ApplicationAdapter.extend({
	
	host: Haul.Server.STORE_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/stores/" + id; 
        return this.ajax(url, 'GET');
    },

	findMany: function(store, type, ids) { 
		var url;
		if( ids.length < 2 ){
			url = this.host + "/stores/" + ids[0];
			return this.ajax(url, 'GET');
		}else{	
			url = this.host + "/stores";
			return this.ajax(url, 'GET', { data: { store_ids: ids } });
		}
	},  

	updateRecord: function(store, type, record) {
		
		var description = record.get('description'); 

		var data = {
			name: record.get('name'),
			description: description,
			user_id: record.get('user_id')
		};

        var store_id = record.get('id');
		var url = this.host + "/stores/" + store_id;

		return this.ajax(url, "PUT", { data: data });
	},

	createRecord: function(store, type, record) {

		var description = record.get('description'); 
		var data = {
			name: record.get('name'),
			description: description,
			user_id: record.get('user_id')
		};
		
		var url = this.host + "/stores";
		return this.ajax(url, "POST", { data: data }); 
	}
});
export default CollectionAdapter;