import DS from 'ember-data';
export default DS.RESTSerializer.extend({

	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok"){
			return;
		} 

		var user_id = null;
		var post_id = null;
		var post_ids = []; 

		payload.data.map(function(result){ 
console.log("RESULT", result);
			var id = String(result.context_id);
			var s = id.split(':');
			user_id = s[1];

			id = String(result.id);
			s = id.split(':');
			post_id = s[1];

			var key = user_id + "-" + post_id;
 			post_ids.push(key);
			
		});  

		var data = {
			id: recordId,
			posts: post_ids,
		};
		
		payload ={'user-likes-list': data}; 
		return this._super(store, primaryType, payload, recordId, requestType);
	}
});