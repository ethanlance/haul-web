import DS from "ember-data";
export default DS.RESTSerializer.extend({

	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){
			return;
		}
		
		var data = null;
		var datas = payload.data.map(function(result){  
			data = {

				id: result.payment_id,
				payment_id: result.payment_id,
				user_id: result.user_id,
				number: result.number,
				card_image_url: result.card_image_url,
				card_type: result.card_type,
				label: result.label,
				
			};

			return data;
		}); 

		payload = {'payment-method-list': datas};  
		return this._super(store, primaryType, payload);
	}
});