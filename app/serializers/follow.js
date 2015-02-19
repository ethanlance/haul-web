import DS from 'ember-data';
export default DS.RESTSerializer.extend({
	extractSingle: function(store, type, payload, recordId, requestType) {
		
		if( payload.data === "ok"){
			return;
		} 

		var id = payload.data.user_id +payload.data.object.id;
		var data = {
			id: id,
			ref_type: payload.data.object.type + "s",
			ref_id: payload.data.object.id,
			user_id: payload.data.user_id
		};

		payload ={'follow': data}; 
		return this._super(store, type, payload, recordId, requestType);
	}
});