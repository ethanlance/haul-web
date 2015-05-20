import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
	
	host: function(){
		return this.ENV.Server.USER_SERVER_HOST;	
	}.property(), 

	find: function(store, type, id) {
		var url = this.get('host') + "/users/" + id;
        return this.ajax(url, 'GET');
    },

	createRecord: function(store, type, record) {
		
		var username = record.get('username');

        var user_id = this.get('currentUser').id;
        
		var url = this.get('host') + '/users/'+user_id+'/username/'+username;

		return this.ajax(url, "PUT");
	},

	updateRecord: function(store, type, record) {
		
		var username = record.get('username');

        var user_id = this.get('currentUser').id;
        
		var url = this.get('host') + '/users/'+user_id+'/username/'+username;

		return this.ajax(url, "PUT");
	},
});