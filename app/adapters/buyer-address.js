import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
	
	host: function(){
		return this.ENV.Server.PROSPER_SERVER_HOST;	
	}.property(), 

	find: function(store, type, id) { 
		var user_id = this.get('currentUser').id;
		var url = this.get('host') + "/users/" + user_id + "/addresses/" + id;
        return this.ajax(url, 'GET');
    },

	createRecord: function(store, type, record) {

		var user_id = record.get('user_id');

		var data = {
			firstname: record.get('firstname'),
			lastname: record.get('lastname'),
			address: record.get('address'),
			city: record.get('city'),
			state: record.get('state'),
			postal_code: record.get('postal_code'),
		};

		if(!Ember.isEmpty(record.get('label'))) {
			data['label'] = record.get('label');
		}

		if(!Ember.isEmpty(record.get('company'))) {
			data['company'] = record.get('company');
		}

		var url = this.get('host') + "/users/" + user_id + "/addresses";
		return this.ajax(url, "POST", { data: data }); 
	},

	updateRecord: function(store, type, record) {

		var user_id = record.get('user_id');
		var address_id = record.get('id');
		
		var data = {
			firstname: record.get('firstname'),
			lastname: record.get('lastname'),
			address: record.get('address'),
			city: record.get('city'),
			state: record.get('state'),
			postal_code: record.get('postal_code'),
		}


		if(!Ember.isEmpty(record.get('label'))) {
			data['label'] = record.get('label');
		}

		if(!Ember.isEmpty(record.get('company'))) {
			data['company'] = record.get('company');
		}

		var url = this.get('host') + '/users/' + user_id + "/addresses/" + address_id;

		return this.ajax(url, "PUT", { data: data });
	},

    deleteRecord: function(store, type, record ) {
    
		var user_id = record.get('user_id');
		var address_id = record.get('id');

		var url = this.get('host') + '/users/' + user_id + "/addresses/" + address_id;
		return this.ajax(url, "DELETE");
	},
});