import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
	
	host: function(){
		return this.ENV.Server.USER_SERVER_HOST;	
	}.property(), 

	find: function(store, type, id) { 
		var url = this.get('host') + "/users/" + id;
        return this.ajax(url, 'GET');
    },

	findQuery: function(store, type, query) {  
        var url = this.get('host') + "/users/" + query.id;
        return this.ajax(url, 'GET');
    },   

    findMany: function(store, type, ids) { 
    	var url;
		if( ids.length < 2 ){
			url = this.get('host') + "/users/" + ids[0];
			return this.ajax(url, 'GET');
		}else{	
			url = this.get('host') + "/users";
			return this.ajax(url, 'GET', { data: { image_ids: ids } });
		}
	},

	updateRecord: function(store, type, record) {
		
        var user_id = this.get('currentUser').id;

        var data = {
        	firstname: record.get('firstname'),
        	lastname: record.get('lastname')
        }

        if( record.get('image_id') ) {
        	data.image_id = record.get('image_id');
        }

		var url = this.get('host') + '/users/'+user_id;

		return this.ajax(url, "PUT", { data: data });
	},
});