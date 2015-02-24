import ApplicationAdapter from './application'; 
import config from '../config/environment';
var Haul = config.APP;

export default ApplicationAdapter.extend({

	host: Haul.Server.WANT_SERVER_HOST,

	find: function(store, type, id) { 
		var user_id = this.get('currentUser').get('id');

		var url = this.host + "/users/" + user_id + "/likes/posts/" + id;		
		return this.ajax(url, 'GET');
	},

	createRecord: function(store, type, record) { 
		var post_id = record.get('post_id');
		var user_id = record.get('user_id');

		var url = this.host + "/users/" + user_id + "/likes/posts/" + post_id;		
		return this.ajax(url, "PUT"); 
	},

	deleteRecord: function(store, type, record) { 
		var post_id = record.get('post_id');
		var user_id = record.get('user_id');

		var url = this.host + "/users/" + user_id + "/likes/posts/" + post_id;		
		return this.ajax(url, "DELETE"); 
	}	

});