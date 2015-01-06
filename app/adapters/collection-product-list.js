import ApplicationAdapter from './application'; 

var CollectionProductListAdapter = ApplicationAdapter.extend({
	
	host: Haul.Server.STORE_SERVER_HOST,  
    findMany: function(store, type, ids, record) {  
		var url = this.host + "/stores/" + record.get('id') + "/products"; 
		return this.ajax(url, 'GET');
	},

	
	findQuery: function(store, type, query) { 
        var url = this.host + "/stores/" + query.collection_id + "/products";
        return this.ajax(url, 'GET');
    },

    updateRecord: function(store, type, record) {

		var data = {
			product_ids: record.get('product_ids'),
			user_id: this.get('currentUser').id
		};

		var collection_id = record.get('collection_id');
		var url = this.host + "/stores/" + collection_id + "/products";
		return this.ajax(url, "PUT", { data: data }); 
	},

    createRecord: function(store, type, record) { 
		var data = {
			product_ids: record.get('product_ids'),
			user_id: this.get('currentUser').id
		};

		var collection_id = record.get('collection_id');
		var url = this.host + "/stores/" + collection_id + "/products";
		return this.ajax(url, "PUT", { data: data }); 
	},
});
export default CollectionProductListAdapter;