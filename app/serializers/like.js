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
		var post_id = key[1];
		

		id = user_id + ":" + post_id;
		var data = {
			id: post_id,
			post_id: post_id,
			user_id: user_id
		};

		payload ={'like': data}; 
		return this._super(store, type, payload, recordId, requestType);
	}
});
