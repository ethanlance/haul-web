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
		
		var data = null;
		var datas = payload.data.map(function(result){  
			var id = result.user_id + "-" + result.post_id; 
			data = {
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


			//repost aka parent post
			if( result.repost_id ){
				var repostId = result.repost_user_id + "-" + result.repost_id;
	            data.repost = repostId;
	            data.repost_body = result.repost_body;
	            data.repost_user = result.repost_user_id;
			}
			return data;
		}); 

		payload = {'post-list': datas};  
		return this._super(store, primaryType, payload);
	}
});