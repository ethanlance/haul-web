import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	extractSingle: function(store, type, payload, recordId, requestType) {
		
		if( payload.data === "ok" ){
			return;
		} 

		var id = String(payload.data.context_id);
		var key = id.split(':');
		var user_id = key[1];

		id = String(payload.data.id);
		key = id.split(':');
		var product_id = key[1];
		

		id = user_id + ":" + product_id;
		var data = {
			id: id,
			ref_type: payload.data.type,
			ref_id: product_id,
			user_id: user_id
		};

		payload ={'like': data}; 
		return this._super(store, type, payload, recordId, requestType);
	}
});
