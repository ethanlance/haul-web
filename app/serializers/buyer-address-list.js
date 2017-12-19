import DS from "ember-data";
export default DS.RESTSerializer.extend({

	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){
			return;
		}
		
		var data = null;
		var datas = payload.data.map(function(result){  
			data = {
				id: result.address_id,
				user_id: result.user_id,
				firstname: result.firstname,
				lastname: result.lastname,
				address: result.address,
				city: result.city,
				state: result.state,
				postal_code: result.postal_code,
				label: result.label,
				company: result.company 
			};

			return data;
		}); 

		payload = {'buyer-address-list': datas};  
		return this._super(store, primaryType, payload);
	}
});