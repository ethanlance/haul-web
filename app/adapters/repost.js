import ApplicationAdapter from './application'; 

import config from '../config/environment';
var Haul = config.APP;

export default ApplicationAdapter.extend({
	
	host: Haul.Server.POST_SERVER_HOST, 

	createRecord: function(store, type, record) {

		var data;
		var user_id = record.get('user_id');
		var repost_user_id = record.get('repost_user_id')
		var repost_id = record.get('repost_id')
 
        data = {
			user_id: user_id,
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

		var url = this.host + "/users/" + repost_user_id + "/posts/" + repost_id;
		return this.ajax(url, "POST", { data: data }); 
	}
});