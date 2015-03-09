import DS from 'ember-data';
export default DS.RESTSerializer.extend({
	
	extractSingle: function(store, type, payload, recordId, requestType) {
		
		if( payload.data === "ok" ){
			return;
		} 

		return this._super(store, type, payload, recordId, requestType);
	},

	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){
			return;
		}
		
		var data = payload.data.map(function(record){
			return {
				id: record.comment_id,	
				comment: record.comment,
				created_at: record.created_at,
				marker_id: record.marker_id,
				
				post: record.subject.id,
				user: record.user_id,

				post_id: record.subject.id,
				user_id: record.user_id,
			};
		}); 

		payload = {'post-comment': data};  
		return this._super(store, primaryType, payload);
	}
});