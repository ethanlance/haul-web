import DS from 'ember-data';
export default DS.RESTSerializer.extend({


	//Need this for Delete, Update record
	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok" ){
			return;
		}
		var result = payload.data;
		
		var data = {
		
			id: result.transaction_id,	

			buyer_user_id: result.buyer_user_id,
			seller_user_id: result.product_user_id,

			buyer: result.buyer_user_id,
			seller: result.product_user_id,


			created_at: result.created_at,
			escrow_status: result.escrow_status,
			fee: result.fee,
			
			post: result.post_id,

			product_id: result.product_id,
			product_price: result.product_price,
			
			


			shipping_id: result.shipping_id,
			shipping_address: result.shipping_address,
			shipping_carrier: result.shipping_carrier,
			shipping_city: result.shipping_city,
			shipping_postal_code: result.shipping_postal_code,
			shipping_price: result.shipping_price,
			shipping_state: result.shipping_state,
			shipping_status: result.shipping_status,


			status: result.status,
			transaction_id: result.transaction_id,
			type: result.type,


			updated_at: result.updated_at,

		}
		payload = {'transaction': data};  
		return this._super(store, primaryType, payload, recordId, requestType);
	},
});	