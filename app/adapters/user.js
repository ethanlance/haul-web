import ApplicationAdapter from './application';
import config from '../config/environment';
var Haul = config.APP;

export default ApplicationAdapter.extend({
	
	host: Haul.Server.USER_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/users/" + id;
        return this.ajax(url, 'GET');
    },

	findQuery: function(store, type, query) {  
        var url = this.host + "/users/" + query.id;
        return this.ajax(url, 'GET');
    },   

    findMany: function(store, type, ids) { 
    	var url;
		if( ids.length < 2 ){
			url = this.host + "/users/" + ids[0];
			return this.ajax(url, 'GET');
		}else{	
			url = this.host + "/users";
			return this.ajax(url, 'GET', { data: { image_ids: ids } });
		}
	},

	updateRecord: function(store, type, record) {
		
        var user_id = this.get('currentUser').id;

        var data = {
        	image_id: record.get('image_id'),
        	firstname: record.get('firstname'),
        	lastname: record.get('lastname')
        }

		var url = this.host + '/users/'+user_id;

		return this.ajax(url, "PUT", { data: data });
	},
});