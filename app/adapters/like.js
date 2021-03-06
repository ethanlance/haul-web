import ApplicationAdapter from './application'; 

export default ApplicationAdapter.extend({


	host: function(){
		return this.ENV.Server.WANT_SERVER_HOST;	
	}.property(), 


	//Does current_user like this post?
	find: function(store, type, id) { 
		var current_user_id = this.get('currentUser').get('id');
		var url = this.get('host') + "/users/" + current_user_id + "/likes/posts/" + id;		
		return this.ajax(url, 'GET');
	},

	createRecord: function(store, type, record) { 

		var current_user_id = this.get('currentUser').get('id');
		var id = record.get('key');

		var url = this.get('host') + "/users/" + current_user_id + "/likes/posts/" + id;		
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
	
		var url = this.get('host') + "/users/" + current_user_id + "/likes/posts/" + id;

		return this.ajax(url, "DELETE"); 
	}	

});