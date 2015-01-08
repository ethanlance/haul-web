import Ember from 'ember';
import DS from 'ember-data';


var ProductCollectionListSerializer =  DS.RESTSerializer.extend({ 

	extractSingle: function(store, primaryType, payload, recordId, requestType) {
 console.log("HERE", payload, recordId)
		if( payload.data === "ok"  ){ 
			return;
		}
		
		var product_id = null;
		var collection_ids = [];

		var data = payload.data.map(function(result){ 
			product_id =  result.product_id;
			collection_ids.push( result.store_id );
			return;
		}); 

		// data = {
		// 	id: product_id,	
		// 	product: product_id,
		// 	collections: collection_ids
		// };
 
		data = {
			id: recordId,
			collections: collection_ids 
		};
console.log('data', data)
		payload = {'product-collection-list': data};  
		return this._super(store, primaryType, payload, recordId, requestType);
	},

	// extractArray: function(store, primaryType, payload) {
 // console.log("there")
	// 	if( payload.data === "ok" ){
	// 		return;
	// 	}
		 
	// 	var product_id = null;
	// 	var collection_ids = [];

	// 	payload.data.map(function(result){ 
	// 		product_id =  result.product_id;
	// 		collection_ids.push( result.store_id );
	// 		return;
	// 	}); 

	// 	var data = [{
	// 		id: product_id,	
	// 		product_id: product_id,
	// 		collections: collection_ids
	// 	}];

	// 	var id = product_id;
	// 	data = {
	// 		id: id,
	// 		collection_ids: collection_ids,
	// 		product_id: product_id,
	// 	};

	// 	payload = {'product-collection-list': data};   
	// 	return this._super(store, primaryType, payload);
	// }
});
export default ProductCollectionListSerializer;