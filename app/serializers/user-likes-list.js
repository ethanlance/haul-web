import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({

	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok"){
			return;
		} 

		var product_id = null;
		var product_ids = []; 

		payload.data.map(function(result){ 

			var id = String(result.context_id);
			var key = id.split(':');
			id = String(result.id);
			key = id.split(':');
			product_id = key[1];
			product_ids.push(product_id);
			
		});  

		var data = {
			id: recordId,
			products: product_ids,
		};
		
		payload ={'user-likes-list': data}; 
		return this._super(store, primaryType, payload, recordId, requestType);
	}
});