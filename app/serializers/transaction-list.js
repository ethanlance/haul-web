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
				id: result.transaction_id,	

				buyer_user_id: result.buyer_user_id,
				created_at: result.created_at,
				post_id: result.post_id,
				product_id: result.product_id,
				image: result.product_image_id,
				product_name: result.product_name,
				product_price: result.product_price,
				product_user_id: result.product_user_id,
				shipping_status: result.shipping_status,
				transaction_id: result.transaction_id, 
				updated_at: result.updated_at,
			};


	
			return data;
		}); 

		payload = {'transaction-list': datas};  
		return this._super(store, primaryType, payload);
	}
});