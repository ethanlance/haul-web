import DS from 'ember-data';

var CollectionProductSerializer =  DS.RESTSerializer.extend({


	//Need this for Delete, Update record
	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok" ){
			return;
		}
		
		var data = {
			id: recordId,	
			updated_at: payload.data.updated_at,
			editorial: payload.data.editorial,
			product: payload.data.product_id,
			collection: payload.data.store_id,
			commentCount: recordId
		};

		payload = {'collection-product': data};  
		return this._super(store, primaryType, payload, recordId, requestType);
	},

	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){
			return;
		} 
		
		var commentCountId = payload.data.store_id +"-"+payload.data.product_id
		var id = payload.data.store_id +"-"+ payload.data.product_id; 
		var data = {
			id: id,	
			updated_at: payload.data.updated_at,
			editorial: payload.data.editorial,
			product: payload.data.product_id,
			collection: payload.data.store_id,
			commentCount: commentCountId
		};

		payload = {'collection-product': [data]};  
		return this._super(store, primaryType, payload);
	}
});
export default CollectionProductSerializer;

