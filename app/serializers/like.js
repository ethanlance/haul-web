import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	extractSingle: function(store, type, payload, recordId, requestType) {
		
		if( payload.data === "ok" ){
			return;
		} 
		
		var id = String(payload.data.object.id);
		var key = id.split('_');
		var post_id = key[1];
		 
		var data = {
			id: payload.data.object.id,
			post_id: post_id,
			user_id: payload.data.user_id
		};

		payload ={'like': data}; 
		return this._super(store, type, payload, recordId, requestType);
	}
});
