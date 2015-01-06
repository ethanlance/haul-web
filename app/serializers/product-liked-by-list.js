import DS from 'ember-data';


var ProductLikedByListSerializer =  DS.RESTSerializer.extend({

	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok"){
			return;
		} 

		var product_id = null;
		var user_ids = []; 
		var user_id = null;

		payload.data.map(function(result){ 

			var id = String(result.context_id);
			var key = id.split(':');
			product_id = key[1];

			id = String(result.id);
			key = id.split(':');
			user_id = key[1];
			user_ids.push(user_id);
			
		});  

		var id = product_id;
		var data = {
			id: id,
			users: user_ids,
			product_id: product_id,
		};

		payload ={'product-liked-by-list': data}; 
		return this._super(store, primaryType, payload, recordId, requestType);
	}
});
export default ProductLikedByListSerializer;


