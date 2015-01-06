import ApplicationAdapter from './application'; 

var CollectionProductAdapter = ApplicationAdapter.extend({
	
	host: Haul.Server.STORE_SERVER_HOST, 

	find: function(store, type, id){
			id = String(id);
		var key = id.split('-');
		var collection_id = key[0];
		var product_id = key[1];
		var url = this.host + "/stores/" + collection_id + "/products/" + product_id;

        return this.ajax(url, 'GET');
	},

	findQuery: function(store, type, args) {
		var url = this.host + "/stores/" + args.collection_id + "/products/" + args.product_id;
        return this.ajax(url, 'GET');
    },

    deleteRecord: function(store, type, record ) {
    
    	record.rollback();

      	var data = {user_id:  this.get('currentUser').id};
		var collection_id = record.get('collection').get('id');
		var product_id = record.get('product').get('id');
		var url = this.host + "/stores/" + collection_id + "/products/" + product_id;

		//record.rollforward()?

		return this.ajax(url, "DELETE", {data: data} );
	},    
 
	updateRecord: function(store, type, record) {

		var data = {
			editorial: record.get('editorial'),
			user_id: this.get('currentUser').id
		};

		var collection_id = record.get('collection').get('id');
		var url = this.host + "/stores/" + collection_id + "/products/" + record.get('product').get('id');
		return this.ajax(url, "PUT", { data: data }); 
	},

	createRecord: function(store, type, record) {

		var data = {
			editorial: record.get('editorial'),
			user_id: this.get('currentUser').id
		};

		var collection_id = record.get('collection').get('id');
		var url = this.host + "/stores/" + collection_id + "/products/" + record.get('product').get('id');
		return this.ajax(url, "PUT", { data: data }); 
	}
});
export default CollectionProductAdapter;