import DS from 'ember-data';
import MetaSerializer from '../mixins/meta_serializer';
export default DS.RESTSerializer.extend( MetaSerializer,{ 
	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){ 
			return;
		}
 		
 		var data = [];
		data = payload.data.map(function(result){ 
			return {
				id: result.post_id,
				post_id: result.post_id,

				subject: result.subject,
				image: result.image_id,	
				
				product_currency: result.product_currency,
				product_price: result.product_price,
				product_status: result.product_status,
				product_name: result.product_name,

				update_at: result.update_at,
				comments_total: result.comments_total,
				likes_total: result.likes_total,
			};
		});

		payload = {'search-post': data}; 
		return this._super(store, primaryType, payload);
	},
});
