import ApplicationAdapter from './application'; 
import config from '../config/environment';
var Haul = config.APP;

export default ApplicationAdapter.extend({

	host: Haul.Server.WANT_SERVER_HOST,

	//Does current_user like this post?
	find: function(store, type, id) { 
		var current_user_id = this.get('currentUser').get('id');
		var url = this.host + "/users/" + current_user_id + "/likes/users_posts/" + id;		
		return this.ajax(url, 'GET');
	},

	createRecord: function(store, type, record) { 

		var current_user_id = this.get('currentUser').get('id');
		var id = record.get('key');

		var url = this.host + "/users/" + current_user_id + "/likes/users_posts/" + id;		
		return this.ajax(url, "PUT"); 
	},

	deleteRecord: function(store, type, record) { 
		var current_user_id = this.get('currentUser').get('id');
		
		var id;
		if( record.get('key') ){
			id = record.get('key');
		}else{
			id = record.get('id');	
		}
		

		var url = this.host + "/users/" + current_user_id + "/likes/users_posts/" + id;

		console.log("DELETE LIK", record, url);
		return this.ajax(url, "DELETE"); 
	}	

});