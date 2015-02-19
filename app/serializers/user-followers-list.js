import DS from 'ember-data';
export default DS.RESTSerializer.extend({

	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok" ){
			return;
		} 
		
		var follower_ids = [];
		payload.data.map(function(result){
			follower_ids.push( result.user_id );
			return;
		}); 

		var data = {
			id: recordId,
			followers: follower_ids
		};
	
		payload ={'user-followers-list': data}; 
		return this._super(store, primaryType, payload, recordId, requestType);
	}
});