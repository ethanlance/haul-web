import ApplicationAdapter from './application'; 
/* global Haul */
var ProductCommentCountAdapter = ApplicationAdapter.extend({

	host: Haul.Server.COMMENT_SERVER_HOST,

	type_map: {
		'collections': 'stores',
		'stores': 'stores',
		'products': 'products',
		'users': 'users'
	},

	makeKey: function(id) {
		id = String(id);
		var s = id.split(':');
		return {
			contextType : s[0],
			contextId : s[1],
			itemId : s[3]
		};
	},

	find: function(store, type, id) {
		var key = this.makeKey(id);
		var contextType = this.type_map[key.contextType];
		var url = this.host + '/' + contextType +'/' + key.contextId + '/products/'+ key.itemId + '/comments/total';
		return this.ajax(url, 'GET');
	}
});
export default ProductCommentCountAdapter;