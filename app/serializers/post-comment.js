import DS from 'ember-data';
export default DS.RESTSerializer.extend({

	extractMeta: function(store, type, payload) {
		if (payload && payload.paging) {
			store.setMetadataFor(type, { 
				next: payload.paging.next,
				previous: payload.paging.previous,
				limit: payload.paging.limit,
				count: payload.paging.count,
			});  
		}
  	},
	
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