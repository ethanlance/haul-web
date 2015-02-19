import DS from 'ember-data';
export default DS.RESTSerializer.extend({

	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok"){
			return;
		} 

		var post_id = null;
		var post_ids = []; 

		payload.data.map(function(result){ 

			var id = String(result.context_id);
			var key = id.split(':');
			id = String(result.id);
			key = id.split(':');
			post_id = key[1];
			post_ids.push(post_id);
			
		});  

		var data = {
			id: recordId,
			posts: post_ids,
		};
		
		payload ={'user-likes-list': data}; 
		return this._super(store, primaryType, payload, recordId, requestType);
	}
});