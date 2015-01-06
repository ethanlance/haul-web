import DS from 'ember-data';


var ProductSerializer =  DS.RESTSerializer.extend({

	extractFindMany: function(store, type, payload){
		if( payload.data.type === "product" ){
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
			id: payload.data.product_id,	
			name: payload.data.name,
			description: payload.data.description,
			price: payload.data.price,
			quantity: payload.data.quantity,
			images: payload.data.image_ids,
			image: payload.data.image_ids[0],
			user: payload.data.user_id,
			user_id: payload.data.user_id,
			
			likeCount: payload.data.product_id,

			getCollections: payload.data.product_id,
			getLikes: payload.data.product_id,
		};

		payload ={'product': data}; 
		return this._super(store, primaryType, payload, recordId, requestType);
	},


	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){ 
			return;
		}
 		
 		var data = [];
		data = payload.data.map(function(result){ 
			return {
				id: result.product_id,	
				name: result.name,
				description: result.description,
				price: result.price,
				quantity: result.quantity,
				images: result.image_ids,
				image: result.image_ids[0],
				user: result.user_id,
				user_id: result.user_id,
				
				likeCount: payload.data.product_id,

				getCollections: payload.data.product_id,
				getLikes: payload.data.product_id,

			};
		});

		payload = {'product': data}; 
		return this._super(store, primaryType, payload);
	},
});
export default ProductSerializer;