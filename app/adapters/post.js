import ApplicationAdapter from './application'; 

export default ApplicationAdapter.extend({
	
	host: function(){
        return this.ENV.Server.POST_SERVER_HOST;    
    }.property(), 

	find: function(store, type, id) { 
		var url = this.get('host') + "/posts/" + id;
        return this.ajax(url, 'GET');
    },

	findQuery: function(store, type, query){ 
		var url = this.get('host') + "/posts/" + query.post_id;
        return this.ajax(url, 'GET');
	},

	findMany: function(store, type, args) {
		var url = this.get('host') + "/users/" + args.user_id + "/posts";
        return this.ajax(url, 'GET');
    },

    deleteRecord: function(store, type, record ) {
    
    	//record.rollback();
		//var user_id = record.get('user').get('id');
		var post_id = record.get('post_id');
		//record.rollforward()?

		var url = this.get('host') + "/posts/" + post_id;
		return this.ajax(url, "DELETE");
	},

	updateRecord: function(store, type, record) {

		//var user_id = record.get('user').get('id');
		var post_id = record.get('post_id');

		var data = {
            subject: record.get('subject'),
            body: record.get('body'),
            image_id: record.get('image_id'),
            product_name: record.get('product_name'),
            product_description: record.get('product_description'),
            product_currency: record.get('product_currency'),
            product_shipping: record.get('product_shipping'),
            //product_price: record.get('product_price'),
            product_quantity: record.get('product_quantity'),
            product_image_ids: record.get('product_image_ids'),
            //product_status: record.get('product_status'),
        };

        if( record.get('product_status') !== 'FOR_SALE_OFFSITE') {
            data['product_status'] = record.get('product_status');
        }

        data['product_price'] = record.get('product_price') * 100;

		var url = this.get('host') + "/posts/" + post_id;
		return this.ajax(url, "PUT", { data: data }); 
	},


	createRecord: function(store, type, record) {

		var data = {
            user_id: record.get('user_id'),
            subject: record.get('subject'),
            body: record.get('body'),
            image_id: record.get('image_id'),
            product_name: record.get('product_name'),
            product_description: record.get('product_description'),
            
            product_currency: record.get('product_currency'),
            //product_price: record.get('product_price'),
            product_shipping: record.get('product_shipping'),
            product_quantity: record.get('product_quantity'),
            product_image_ids: record.get('product_image_ids'),
            product_status: record.get('product_status'),
        };


        //Convert dollars to pennies.
        data['product_price'] = record.get('product_price') * 100;


        if( !Ember.isEmpty(record.get('product_link'))) {
            data['product_link'] = record.get('product_link');
        }

		var url = this.get('host') + "/posts";
		return this.ajax(url, "POST", { data: data }); 
	}
});