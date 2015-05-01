import DS from "ember-data";
export default DS.RESTSerializer.extend({


	extractSingle: function(store, type, payload, recordId, requestType) {
		if( payload.data === "ok" ){
			return;
		}
		
		var data =  {

			id: payload.data.payment_id,
			payment_id: payload.data.payment_id,

			user_id: payload.data.user_id,
			name: payload.data.name,
			number: payload.data.number,
			cvv: payload.data.cvv,
			expiration: payload.data.expiration,
			postal_code: payload.data.postal_code,

			card_image_url: payload.data.card_image_url,
			card_type: payload.data.card_type,
			label: payload.data.label,
			
		};

		payload = {'payment-method': data}; 
		return this._super(store, type, payload, recordId, requestType);
	}
});