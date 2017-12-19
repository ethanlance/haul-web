import DS from "ember-data";
export default DS.RESTSerializer.extend({

	extractSingle: function(store, type, payload, recordId, requestType) {
		if( payload.data === "ok" ){
			return;
		}
		
		var data =  {
			id: payload.data.user_id,

		    user_id: payload.data.user_id,
		    firstname: payload.data.firstname,
		    lastname: payload.data.lastname,
		    email: payload.data.email,
		    phone: payload.data.phone,
		    dob: payload.data.dob,
		    ssn: payload.data.ssn,
		    address: payload.data.address,
		    city: payload.data.city,
		    state: payload.data.state,
		    postal_code: payload.data.postal_code,
		    routing_number: payload.data.routing_number,
		    account_number: payload.data.account_number,
		    tos_accepted: payload.data.tos_accepted,
		    business_legal_name: payload.data.business_legal_name,
		    business_name: payload.data.business_name,
		    business_tax_id: payload.data.business_tax_id,
		    business_address: payload.data.business_address,
		    business_city: payload.data.business_city,
		    business_state: payload.data.business_state,
		    business_postal_code: payload.data.business_postal_code,
		};

		payload = {'seller': data}; 
		return this._super(store, type, payload, recordId, requestType);
	},
});