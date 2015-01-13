import ApplicationAdapter from './application'; 

import config from '../config/environment';
var Haul = config.APP;

var ProductAdapter = ApplicationAdapter.extend({
	
	host: Haul.Server.PRODUCT_SERVER_HOST,
 
	findQuery: function(store, type, query) {
        var url = this.host + "/users/" + query.user_id + "/products";
        return this.ajax(url, 'GET');
    },

	findMany: function(store, type, ids) { 
		var url;
		if( ids.length < 2 ){
			url = this.host + "/products/" + ids[0];
			return this.ajax(url, 'GET');
		}else{	
			url = this.host + "/products";
			return this.ajax(url, 'GET', { data: { product_ids: ids } });
		}
	}, 

	deleteRecord: function(store, type, record) {	
      	var id = record.get('id');

		var user_id = this.get('currentUser').id;
      	var url = this.host + "/users/" + user_id + '/products/' + id; 
		return this.ajax(url, "DELETE");
	},

	updateRecord: function(store, type, record) {
		var data = {
			name: record.get('name'),
			description: record.get('description'),
			price: record.get('price'),
			quantity: record.get('quantity'),
			image_ids: record.get('image_ids').map(function(image){ return image;})
		};

        var user_id = this.get('currentUser').id;
        var product_id = record.get('id');
		var url = this.host + "/users/" + user_id + "/products/" + product_id;

		return this.ajax(url, "PUT", { data: data });
	},

	createRecord: function(store, type, record) {

		var data = {
			name: record.get('name'),
			description: record.get('description'),
			price: record.get('price'),
			quantity: record.get('quantity'),
			image_ids: record.get('image_ids').map(function(image){ return image;})
		};
		
		var user_id = this.get('currentUser').id;
		var url = this.host + "/users/" + user_id + "/products";
		
		return this.ajax(url, "POST", { data: data }); 
	}
});
export default ProductAdapter;