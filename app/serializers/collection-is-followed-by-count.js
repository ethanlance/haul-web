import DS from 'ember-data';
 
var CollectionIsFollowedByCountSerializer =  DS.RESTSerializer.extend({

	extractSingle: function(store, type, payload, recordId, requestType) {

		if( payload.data === "ok"){
			return;
		} 

		var data = { 
			id: payload.data.object.id,
			total: payload.data.total,	
		};

		payload ={'collection-is-followed-by-count': data}; 
		return this._super(store, type, payload, recordId, requestType);
	}
});
export default CollectionIsFollowedByCountSerializer;

