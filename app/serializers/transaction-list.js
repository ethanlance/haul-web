import DS from 'ember-data';
import MetaSerializer from '../mixins/meta_serializer';
export default DS.RESTSerializer.extend( MetaSerializer,{ 

	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){
			return;
		}
		
		var data = null;
		var datas = payload.data.map(function(result){  
			data = {
				id: result.post_id,	
				post_id:result.post_id,
				user_id: result.user_id,
				updated_at: result.updated_at,
				created_at: result.created_at,
				
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


	
			return data;
		}); 

		payload = {'post-list': datas};  
		return this._super(store, primaryType, payload);
	}
});