import ApplicationAdapter from "./application"; 
/* global Haul */

var LikeCountAdapter = ApplicationAdapter.extend({

	host: Haul.Server.WANT_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/likes/products/" + id + "/total";  
		return this.ajax(url, 'GET');
	}
});
export default LikeCountAdapter;