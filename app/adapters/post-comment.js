import Ember from 'ember';
import ApplicationAdapter from './application';
import config from '../config/environment';
var Haul = config.APP;

export default ApplicationAdapter.extend({

	host: Haul.Server.COMMENT_SERVER_HOST, 


	findQuery: function(store, type, query) {
		var url = this.host + "/posts/" + query.post_id + "/comments";
		url = this.queryBuilder(query, url);
		return this.ajax(url, 'GET');
	},

	createRecord: function(store, type, record) {		
		var data = { 'comment':record.get('comment') };
		var url = this.host + '/users/'+ record.get('user_id') +'/comments/posts/' + record.get('post_id');
		return this.ajax(url, "POST", {data: data}); 
	},

	deleteRecord: function(store, type, record) {
		var url = this.host + '/users/'+ record.get('user_id') +'/comments/' + record.get('id');
		return this.ajax(url, "DELETE"); 
	}	

});