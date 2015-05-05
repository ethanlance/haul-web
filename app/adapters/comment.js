import Ember from 'ember';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

	host: function(){
		return this.ENV.Server.COMMENT_SERVER_HOST;	
	}.property(), 

	findQuery: function(store, type, query) {
		var url = this.get('host') + "/"+ query.object_type +"/" + query.object_id + "/comments";
		url = this.queryBuilder(query, url);
		return this.ajax(url, 'GET');
	},

	createRecord: function(store, type, record) {		
		var data = { 'comment':record.get('comment') };
		var id = record.get('object_id');
		var type = record.get('object_type');
		var user_id = record.get('user_id');
		var url = this.get('host') + '/users/'+ user_id +'/comments/'+ type +'/' + id;
		return this.ajax(url, "POST", {data: data}); 
	},

	deleteRecord: function(store, type, record) {
		var id = record.get('object_id');
		var type = record.get('object_type');
		var user_id = record.get('user_id');
		var url = this.get('host') + '/users/'+ user_id +'/comments/' + id;
		return this.ajax(url, "DELETE"); 
	}	

});