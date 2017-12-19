import DS from 'ember-data';
export default DS.RESTSerializer.extend({

	extractSingle: function(store, type, payload, recordId, requestType) {

		if( payload.data === "ok" ){
			return;
		} 

		var data = { 
			id: recordId,
			total: payload.data.total,	
		};

		payload ={'user-following-count': data}; 
		return this._super(store, type, payload, recordId, requestType);
	}
});