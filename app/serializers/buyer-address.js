import DS from "ember-data";
export default DS.RESTSerializer.extend({

	extractSingle: function(store, type, payload, recordId, requestType) {
		if( payload.data === "ok" ){
			return;
		}
		
		var data =  {
			id: payload.data.address_id,
			user_id: payload.data.user_id,
			firstname: payload.data.firstname,
			lastname: payload.data.lastname,
			address: payload.data.address,
			state: payload.data.state,
			postal_code: payload.data.postal_code,
			label: payload.data.label,
			company: payload.data.company
		};

		payload = {'buyer-address': data}; 
		return this._super(store, type, payload, recordId, requestType);
	}
});