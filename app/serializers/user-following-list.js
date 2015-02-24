import DS from 'ember-data';

export default  DS.RESTSerializer.extend({

	extractSingle: function(store, primaryType, payload, recordId) {

		if( payload.data === "ok" ){ 
			return;
		}

		var follows_ids = [];

		payload.data.map(function(result){ 
			follows_ids.push( result.object.id );
			return;
		}); 

		var data = {
			id: recordId,	
			users: follows_ids
		};

		payload = {'user-following-list': data}; 

		return this._super(store, primaryType, payload, recordId);
	}
});