import DS from 'ember-data';

var CollectionSerializer =  DS.RESTSerializer.extend({
	
	extractFindMany: function(store, type, payload){
		if( payload.data.type === "store" ){
			return [this.extractSingle(store, type, payload)];
		}else{
			return this.extractArray(store, type, payload);
		}
    },

	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok" ){ 
			return;
		}
 
		var data = {
			id: payload.data.store_id,	
			name: payload.data.name,
			slug: payload.data.slug,
			description: payload.data.description,
			user: payload.data.user_id,
			user_id: payload.data.user_id,
			image: payload.data.image_id,

			getFollowedByCount: payload.data.store_id,
			getFollowers: payload.data.store_id,
		};


		// if( payload.data.product_ids){
		// 	data['products'] = payload.data.product_ids
		// }

		payload = {'collection': data}; 
		return this._super(store, primaryType, payload, recordId, requestType);
	},

	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){ 
			return;
		}
 		
 		var data = [];
		data = payload.data.map(function(result){ 
			return {
				id: result.store_id,	
				name: result.name,
				slug: result.slug,
				description: result.description,
				user: result.user_id,
				user_id: result.user_id,
				isFollowedByCount: result.store_id,
				followers: result.store_id,
				image: result.image_id
			};
		});


		// if( payload.data.product_ids){
		// 	data['products'] = payload.data.product_ids
		// }

		payload = {'collection': data}; 
		return this._super(store, primaryType, payload);
	},
});
export default CollectionSerializer;