import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
	
	host: function(){
		return this.ENV.Server.PROSPER_SERVER_HOST;	
	}.property(), 

	find: function(store, type, id) { 
		var user_id = this.get('currentUser').id;
		var url = this.get('host') + "/buyers/" + user_id + "/payments/" + id;
        return this.ajax(url, 'GET');
    },

	updateRecord: function(store, type, record) {

		var user_id = record.get('user_id');
		var payment_id = record.get('id');
		
		var data = {
			name: record.get('name'),
			number: record.get('number'),
			cvv: record.get('cvv'),
			expiration: record.get('expiration'),
			postal_code: record.get('postal_code'),
		}; 

		var url = this.get('host') + '/buyers/' + user_id + "/payments/" + payment_id;

		return this.ajax(url, "PUT", { data: data });
	},

    deleteRecord: function(store, type, record ) {
    
		var user_id = record.get('user_id');
		var payment_id = record.get('id');

		var url = this.get('host') + '/buyers/' + user_id + "/payments/" + payment_id;
		return this.ajax(url, "DELETE");
	},
});