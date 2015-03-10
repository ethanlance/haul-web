import DS from 'ember-data';
import MetaSerializer from '../mixins/meta_serializer';
export default DS.RESTSerializer.extend( MetaSerializer,{ 
	
	extractSingle: function(store, type, payload, recordId, requestType) {
		
		if( payload.data === "ok" ){
			return;
		} 

		var timeInMs = Date.now();

		var data = {
			id: payload.data.comment_id,	
			comment: payload.data.comment,
			created_at: timeInMs,
			marker_id: payload.data.marker_id,
			
			post: payload.data.subject.id,
			user: payload.data.user_id,

			post_id: payload.data.subject.id,
			user_id: payload.data.user_id
		};
		

		payload = {'post-comment': data};  

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