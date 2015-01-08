import ApplicationAdapter from './application'; 
/* global Haul */
var ProductListAdapter = ApplicationAdapter.extend({
	
	host: Haul.Server.PRODUCT_SERVER_HOST,
 
	findQuery: function(store, type, query) {
        var url = this.host + "/users/" + query.user_id + "/products";
        return this.ajax(url, 'GET');
    },

});
export default ProductListAdapter;