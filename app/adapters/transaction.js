import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
	
	host: function(){
		return this.ENV.Server.PROSPER_SERVER_HOST;	
	}.property(), 

	find: function(store, type, id) { 
		
		var user_id = this.get('session.user_id');

		var url = this.get('host') + "/users/" + user_id + "/transactions/" + id;

        return this.ajax(url, 'GET');
    },

	createRecord: function(store, type, record) {

		var data = {
			user_id: record.get('user_id'),
			address_id: record.get('address_id'),
			payment_id: record.get('payment_id'),
			post_id: record.get('post_id'),
			product_user_id: record.get('product_user_id'),
			product_id: record.get('product_id')
		}

		var url = this.get('host') + "/transactions";
		return this.ajax(url, "POST", { data: data }); 
	},

	// updateRecord: function(store, type, record) {

	// 	var user_id = record.get('user_id');
		
	// 	var data = {
	// 		firstname: record.get('firstname'),
	// 		lastname: record.get('lastname'),
	// 		email: record.get('email'),
	// 		phone: record.get('phone')
	// 	}

	// 	var url = this.get('host') + '/buyers/' + user_id;

	// 	return this.ajax(url, "PUT", { data: data });
	// },

    deleteRecord: function(store, type, record ) {
    
		var user_id = this.get('session.user_id');

		var id = record.get('id');
	
		var url = this.get('host') + "/users/" + user_id + "/transactions/" + id;
		return this.ajax(url, "DELETE");
	},
});