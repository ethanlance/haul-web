import Ember from 'ember';
import DS from 'ember-data';


var ProductCollectionListSerializer =  DS.RESTSerializer.extend({ 

	extractSingle: function(store, primaryType, payload, recordId, requestType) {
 
		if( payload.data === "ok" || Ember.isEmpty(payload.data)){ 
			return;
		}
		
		var product_id = null;
		var collection_ids = [];

		var data = payload.data.map(function(result){ 
			product_id =  result.product_id;
			collection_ids.push( result.store_id );
			return;
		}); 

		data = {
			id: product_id,	
			product: product_id,
			collections: collection_ids
		};

		payload = {'product-collection-list': data};  
		return this._super(store, primaryType, payload, recordId, requestType);
	},

	extractArray: function(store, primaryType, payload) {
 
		if( payload.data === "ok" || Ember.isEmpty(payload.data)){
			return;
		}
		 
		var product_id = null;
		var collection_ids = [];

		payload.data.map(function(result){ 
			product_id =  result.product_id;
			collection_ids.push( result.store_id );
			return;
		}); 

		var data = [{
			id: product_id,	
			product: product_id,
			collections: collection_ids
		}];

		payload = {'product-collection-list': data};   
		return this._super(store, primaryType, payload);
	}
});
export default ProductCollectionListSerializer;