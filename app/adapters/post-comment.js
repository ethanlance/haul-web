import Ember from 'ember';
import ApplicationAdapter from './application';
import config from '../config/environment';
var Haul = config.APP;

export default ApplicationAdapter.extend({

	host: Haul.Server.COMMENT_SERVER_HOST, 

	type_map: { 
		'posts': 'posts',
		'users': 'users'
	},

	findQuery: function(store, type, query) {
		
		var contextType = this.type_map[Ember.String.pluralize(query.contextType)];

		var url = this.host + "/" + contextType + "/" + query.contextId + "/posts/" + query.itemId + "/comments";
		return this.ajax(url, 'GET');
	},

	createRecord: function(store, type, record) {		
		var itemId = record.get('product_id');
		var contextType = this.type_map[record.get('type')];
		var contextId = record.get('id');
		var data = { 'comment':record.get('comment'), 'user_id': record.get('user_id') };
		var url = this.host + '/'+ contextType + '/' + contextId +'/posts/'+ itemId + '/comments';
		return this.ajax(url, "POST", {data: data}); 
	},

	deleteRecord: function(store, type, record) {
		var itemId = record.get('product_id');
		var contextType = this.type_map[record.get('context_type')];
		var contextId = record.get('context_id'); 
		var commentId = record.get('id');
		var data = { 'user_id': record.get('user_id') };

		var url = this.host + '/'+ contextType + '/' + contextId +'/posts/'+ itemId + '/comments/' + commentId;
		return this.ajax(url, "DELETE", {data: data}); 
	}	

});