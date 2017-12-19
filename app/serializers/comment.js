import DS from 'ember-data';
import MetaSerializer from '../mixins/meta_serializer';
export default DS.RESTSerializer.extend( MetaSerializer,{ 
	
	extractSingle: function(store, type, payload, recordId, requestType) {
		
		if( payload.data === "ok" ){
			return;
		} 

		var timeInMs = Date.now() / 1000;

		var data = {
			id: payload.data.comment_id,	
			comment: payload.data.comment,
			created_at: timeInMs,
			marker_id: payload.data.marker_id,
			
			
			user: payload.data.user_id,

			object_id: payload.data.subject.id,
			object_type: payload.data.subject.type,
			user_id: payload.data.user_id
		};
		

		payload = {'comment': data};  

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
				
				
				user: record.user_id,

				object_id: record.subject.id,
				object_type: record.subject.type,


				user_id: record.user_id,
			};
		}); 

		payload = {'comment': data};  
		return this._super(store, primaryType, payload);
	}
});