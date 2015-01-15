import DS from 'ember-data';

var UserCollectionSerializer =  DS.RESTSerializer.extend({


	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok"){ 
			return;
		} 
 		
	 		var data = {id:recordId};
			payload.data.map(function(result){
				data = {
					id: recordId,
					collection_id: result.store_id,	
					collection_name: result.store_name,	
					user_id: result.user_id,
					user: result.user_id,
					collection: result.store_id,
					slug: result.slug
				};
			});

console.log("FUCK YOU ", data)
 
		payload = {'user-collection': data}; 
		return this._super(store, primaryType, payload, recordId, requestType);
	},

	extractArray: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok" ){
			return;
		}
		var data = payload.data.map(function(result){
			var id = recordId
			return {
				id: id,
				collection_id: result.store_id,	
				collection_name: result.store_name,	
				user_id: result.user_id,
				user: result.user_id,
				collection: result.store_id,
				slug: result.slug
			};
		});

		payload = {'user-collection': data}; 

		return this._super(store, primaryType, payload, recordId, requestType);
	},
});
export default UserCollectionSerializer;