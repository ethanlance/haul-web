import Ember from 'ember';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

	host: function(){
		return this.ENV.Server.COMMENT_SERVER_HOST;	
	}.property(), 

	findQuery: function(store, type, query) {
		var url = this.get('host') + "/posts/" + query.post_id + "/comments";
		url = this.queryBuilder(query, url);
		return this.ajax(url, 'GET');
	},

	createRecord: function(store, type, record) {		
		var data = { 'comment':record.get('comment') };
		var url = this.get('host') + '/users/'+ record.get('user_id') +'/comments/posts/' + record.get('post_id');
		return this.ajax(url, "POST", {data: data}); 
	},

	deleteRecord: function(store, type, record) {
		var url = this.get('host') + '/users/'+ record.get('user_id') +'/comments/' + record.get('id');
		return this.ajax(url, "DELETE"); 
	}	

});