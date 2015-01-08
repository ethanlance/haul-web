import ApplicationAdapter from './application'; 
/* global Haul */
var ProductLikedByListAdapter = ApplicationAdapter.extend({

	host: Haul.Server.WANT_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/likes/products/" + id;
		return this.ajax(url, 'GET');
	}
});
export default ProductLikedByListAdapter;
