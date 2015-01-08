import ApplicationAdapter from './application'; 
/* global Haul */

var LikeAdapter = ApplicationAdapter.extend({

	host: Haul.Server.WANT_SERVER_HOST,

	find: function(store, type, id) {
		var ref_type = 'products';
		var ref_id = id;
		var user_id = this.get('currentUser').id;

		var url = this.host + "/users/" + user_id + "/likes/" + ref_type + "/" + ref_id;		
		return this.ajax(url, 'GET');
	},

	createRecord: function(store, type, record) {
		var ref_type = 'products';
		var ref_id = record.get('ref_id');
		var user_id = record.get('user_id');

		var url = this.host + "/users/" + user_id + "/likes/" + ref_type + "/" + ref_id;		
		return this.ajax(url, "PUT"); 
	},

	deleteRecord: function(store, type, record) {
		var ref_type = 'products';
		var ref_id = record.get('ref_id');
		var user_id = record.get('user_id');

		var url = this.host + "/users/" + user_id + "/likes/" + ref_type + "/" + ref_id;		
		return this.ajax(url, "DELETE"); 
	}	

});
export default LikeAdapter;