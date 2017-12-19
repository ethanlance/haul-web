import DS from "ember-data";
export default DS.RESTSerializer.extend({

	extractSingle: function(store, type, payload, recordId, requestType) {
		if( payload.data === "ok" ){
			return;
		}
		
		var data =  {
			id: payload.data.user_id,
			firstname: payload.data.firstname,
			lastname: payload.data.lastname,
			email: payload.data.email,
			user_id: payload.data.user_id,
			phone: payload.data.phone,
			company: payload.data.company
		};

		payload = {'buyer': data}; 
		return this._super(store, type, payload, recordId, requestType);
	},
});