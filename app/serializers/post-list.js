import DS from 'ember-data';
import MetaSerializer from '../mixins/meta_serializer';
export default DS.RESTSerializer.extend( MetaSerializer,{ 

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
			var price = Math.floor(result.product.price / 100);
			data = {
				id: result.post_id,	
				post_id:result.post_id,
				user_id: result.user_id,
				updated_at: result.updated_at,
				created_at: result.created_at,

				post:result.post_id,
				
				user: result.user_id,
				body: result.body,
				subject: result.subject,
				image: result.image_id,

				product_user: result.product.user_id,
				product_user_id: result.product.user_id,
				product_currency: result.product.currency,				
				product_price: price,
				product_name: result.product.name,
				product_status: result.product.status,
				product_quantity: result.product.quantity,
				product_link: result.product.link,

				commentCount: result.post_id,
				likesCount: result.post_id
			};


	
			//repost aka parent post
			if( result.repost_id ){
				data.repost_id = result.repost_id;
	            data.repost = result.repost_id;
	            data.repost_body = result.repost_body;
	            data.repost_user = result.repost_user_id;
			}
			return data;
		}); 

		payload = {'post-list': datas};  
		return this._super(store, primaryType, payload);
	}
});