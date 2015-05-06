import ApplicationAdapter from './application'; 

export default ApplicationAdapter.extend({

	host: function(){
		return this.ENV.Server.FOLLOW_SERVER_HOST;	
	}.property(), 

	find: function(store, type, id) {
		id = String(id);
		var key = id.split('-');
		var ref_id = key[0];
		var ref_type = key[1];
		var user_id = this.get('currentUser').get('id');

		var url = this.get('host') + "/users/" + user_id + "/follows/" + ref_type + "/" + ref_id;		
		
		return this.ajax(url, 'GET');
	},

	createRecord: function(store, type, record) {
		var ref_type = record.get('ref_type');
		var ref_id = record.get('ref_id');
		var user_id = record.get('user_id');

		var url = this.get('host') + "/users/" + user_id + "/follows/" + ref_type + "/" + ref_id;		
		return this.ajax(url, "PUT"); 
	},

	deleteRecord: function(store, type, record) {
		var ref_type = record.get('ref_type');
		var ref_id = record.get('ref_id');
		var user_id = record.get('user_id');

		var url = this.get('host') + "/users/" + user_id + "/follows/" + ref_type + "/" + ref_id;		
		return this.ajax(url, "DELETE"); 
	}	

});