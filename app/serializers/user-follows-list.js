import DS from 'ember-data';

export default  DS.RESTSerializer.extend({

	extractSingle: function(store, primaryType, payload, recordId) {

		if( payload.data === "ok" ){ 
			return;
		}

		var follows_ids = [];

		payload.data.map(function(result){ 
			if( result.object.type === 'store'){
				follows_ids.push( result.object.id );
				return;
			}
		}); 

		var data = {
			id: recordId,	
			follows: follows_ids
		};

		payload = {'user-follows-list': data}; 
		return this._super(store, primaryType, payload);
	}
});