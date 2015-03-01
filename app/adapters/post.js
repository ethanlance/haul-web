import ApplicationAdapter from './application'; 

import config from '../config/environment';
var Haul = config.APP;

export default ApplicationAdapter.extend({
	
	host: Haul.Server.POST_SERVER_HOST, 

	find: function(store, type, key) {
		var s = key.split('-');
		var user_id = s[0];
		var post_id = s[1];
		var url = this.host + "/users/" + user_id + "/posts/" + post_id;
        return this.ajax(url, 'GET');
    },

	findQuery: function(store, type, query){ 
		var url = this.host + "/users/" + query.user_id + "/posts/" + query.post_id;
        return this.ajax(url, 'GET');
	},

	findMany: function(store, type, args) {
		var url = this.host + "/users/" + args.user_id + "/posts";
        return this.ajax(url, 'GET');
    },

    deleteRecord: function(store, type, record ) {
    
    	//record.rollback();
		var user_id = record.get('user').get('id');
		var post_id = record.get('post_id');
		//record.rollforward()?

		var url = this.host + "/users/" + user_id + "/posts/" + post_id;
		return this.ajax(url, "DELETE");
	},

	updateRecord: function(store, type, record) {

		var user_id = record.get('user').get('id');
		var post_id = record.get('post_id');

		var data = {
            subject: record.get('subject'),
            body: record.get('body'),
            image_id: record.get('image_id'),
            product_name: record.get('product_name'),
            product_description: record.get('product_description'),
            product_currency: record.get('product_currency'),
            product_price: record.get('product_price'),
            product_quantity: record.get('product_quantity'),
            product_image_ids: record.get('product_image_ids'),
            product_status: record.get('product_status'),
        };

		var url = this.host + "/users/" + user_id + "/posts/" + post_id;
		return this.ajax(url, "PUT", { data: data }); 
	},


	createRecord: function(store, type, record) {

		var data = {
            user_id: record.get('user').get('id'),
            subject: record.get('subject'),
            body: record.get('body'),
            image_id: record.get('image_id'),
            product_name: record.get('product_name'),
            product_description: record.get('product_description'),
            product_link: record.get('product_link'),
            product_currency: record.get('product_currency'),
            product_price: record.get('product_price'),
            product_quantity: record.get('product_quantity'),
            product_image_ids: record.get('product_image_ids'),
            product_status: record.get('product_status'),
        };

		var url = this.host + "/posts";
		return this.ajax(url, "POST", { data: data }); 
	}
});