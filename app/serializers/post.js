import DS from 'ember-data';
export default DS.RESTSerializer.extend({


	//Need this for Delete, Update record
	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok" ){
			return;
		}
		
		var id = payload.data.user_id + "-" + payload.data.post_id; 
		var data = {

			id: id,	
			user: payload.data.user_id,
			updated_at: payload.data.updated_at,
			body: payload.data.body,
			subject: payload.data.subject,
            image: payload.data.image_id,

            product_user: payload.data.product.user_id,
            product_name: payload.data.product.name,
            product_description: payload.data.product.description,
            product_link: payload.data.product.link,
            product_currency: payload.data.product.currency,
            product_price: payload.data.product.price,
            product_quantity: payload.data.product.quantity,
            product_images: payload.data.product.image_ids,
            product_status: payload.data.product.status,

			commentCount: id
		};

		payload = {'post': data};  
		return this._super(store, primaryType, payload, recordId, requestType);
	},

	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){
			return;
		} 
		
		var id = payload.data.user_id + "-" + payload.data.post_id; 
		var data = {
			id: id,	

			user: payload.data.user_id,
			updated_at: payload.data.updated_at,
			body: payload.data.body,
			subject: payload.data.subject,
            image: payload.data.image_id,

            product_user: payload.data.product.user_id,
            product_name: payload.data.product.name,
            product_description: payload.data.product.description,
            product_link: payload.data.product.link,
            product_currency: payload.data.product.currency,
            product_price: payload.data.product.price,
            product_quantity: payload.data.product.quantity,
            product_images: payload.data.product.image_ids,
            product_status: payload.data.product.status,

			commentCount: id
		};

		payload = {'post': [data]};  
		return this._super(store, primaryType, payload);
	}
});