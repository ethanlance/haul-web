import Ember from 'ember';
import DS from 'ember-data';

var UserLikesListSerializer =  DS.RESTSerializer.extend({

	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok"){
			return;
		} 

		if( Ember.isEmpty(payload.data)){ 
			payload = {'user-likes-list': {id:1} }; 
			return this._super(store, primaryType, payload);
		}
		

		var product_id = null;
		var user_id = null;
		var product_ids = []; 

		payload.data.map(function(result){ 

			var id = String(result.context_id);
			var key = id.split(':');
			user_id = key[1];

			id = String(result.id);
			key = id.split(':');
			product_id = key[1];
			product_ids.push(product_id);
			
		});  
 
		var id = user_id + ":" + product_id;
		var data = {
			id: id,
			user: user_id,
			products: product_ids,
		};
		
		payload ={'user-likes-list': data}; 
		return this._super(store, primaryType, payload, recordId, requestType);
	}
});
export default UserLikesListSerializer;



