import ApplicationAdapter from './application';

import config from '../config/environment';
var Haul = config.APP;

export default ApplicationAdapter.extend({
	
	host: Haul.Server.USER_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/users/" + id;
        return this.ajax(url, 'GET');
    },

	createRecord: function(store, type, record) {
		
		var username = record.get('username');

        var user_id = this.get('currentUser').id;
        
		var url = this.host + '/users/'+user_id+'/username/'+username;

		return this.ajax(url, "PUT");
	},

	updateRecord: function(store, type, record) {
		
		var username = record.get('username');

        var user_id = this.get('currentUser').id;
        
		var url = this.host + '/users/'+user_id+'/username/'+username;

		return this.ajax(url, "PUT");
	},
});