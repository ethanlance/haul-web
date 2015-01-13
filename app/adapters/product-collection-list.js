import ApplicationAdapter from './application'; 

import config from '../config/environment';
var Haul = config.APP;

var ProductCollectionListAdapter = ApplicationAdapter.extend({
	
	host: Haul.Server.STORE_SERVER_HOST, 
	
	find: function(store, type, id) {  
		var url = this.host + "/products/" + id + "/stores"; 
        return this.ajax(url, 'GET');
    },

	findQuery: function(store, type, query) {  
        var url = this.host + "/products/" + query.product_id + "/stores";
        return this.ajax(url, 'GET');
    },
});
export default ProductCollectionListAdapter;