import DS from 'ember-data';

var CollectionProductListSerializer =  DS.RESTSerializer.extend({ 


	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok" ){
			return;
		}
		this._super(store, primaryType, payload, recordId, requestType);
	},

	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){
			return;
		}
		
		var data = payload.data.map(function(result){ 
			var id =  result.product_id + result.store_id;
			return {
				id: id,	
				editorial: result.editorial,
				product: result.product_id,
				collection: result.store_id,

				// currency: result.product_currency,				
				// price: result.product_price,
				// name: result.product_name,
				// product_id: result.product_id,
				// collection_id: result.store_id,
				
				// //collection: result.store_id,	
				// product: result.product_id,
				// image: result.product_image_id,
			};
		}); 

		payload = {'collection-product-list': data};  
		return this._super(store, primaryType, payload);
	}
});
export default CollectionProductListSerializer;