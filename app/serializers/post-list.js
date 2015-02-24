import DS from 'ember-data';
export default DS.RESTSerializer.extend({ 

	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok" ){
			return;
		}
		this._super(store, primaryType, payload, recordId, requestType);
	},

	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){
			return;
		}
		
		
		var data = payload.data.map(function(result){  
			var id = result.user_id + "-" + result.post_id; 
			return {
				id: id,	
				post_id:result.post_id,
				updated_at: result.updated_at,
				
				user: result.user_id,
				body: result.body,
				subject: result.subject,
				image: result.image_id,

				product_currency: result.product.currency,				
				product_price: result.product.price,
				product_name: result.product.name,
				product_status: result.product.status,
				product_quantity: result.product.quantity,
				product_user: result.product.user_id,

				commentCount: result.post_id,
				likesCount: result.post_id
			};
		}); 

		payload = {'post-list': data};  
		return this._super(store, primaryType, payload);
	}
});