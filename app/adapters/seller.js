import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
	
	host: function(){
		return this.ENV.Server.PROSPER_SERVER_HOST;	
	}.property(), 

	find: function(store, type, id) { 
		var url = this.get('host') + "/sellers/" + id;
        return this.ajax(url, 'GET');
    },

	createRecord: function(store, type, record) {

		var data = {
			user_id: record.get('user_id'),
			firstname: record.get('firstname'),
			lastname: record.get('lastname'),
			email: record.get('email'),
			phone: record.get('phone'),
			company: record.get('company')
		}

		var url = this.get('host') + "/buyers";
		return this.ajax(url, "POST", { data: data }); 
	},

	updateRecord: function(store, type, record) {

		var user_id = record.get('user_id');
		
		var data = {
			user_id: record.get('user_id'),
			firstname: record.get('firstname'),
			lastname: record.get('lastname'),
			email: record.get('email'),
			phone: record.get('phone'),
			company: record.get('company')
		}

		var url = this.get('host') + '/buyers/' + user_id;

		return this.ajax(url, "PUT", { data: data });
	},

    deleteRecord: function(store, type, record ) {
    
    	//record.rollback();
		//var user_id = record.get('user').get('id');
		var user_id = record.get('user_id');
		//record.rollforward()?

		var url = this.get('host') + "/buyers/" + user_id;
		return this.ajax(url, "DELETE");
	},
});