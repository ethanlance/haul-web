import DS from 'ember-data';
import MetaSerializer from '../mixins/meta_serializer';
export default DS.RESTSerializer.extend( MetaSerializer,{ 

	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok"){
			return;
		} 

		var datas = payload.data.map(function(result){
			return {
				id: result.comment_id,	

				comment_id: result.comment_id,	
				subject_id: result.subject.id,	
				subject_type: result.subject.type,	

				user:result.user_id,
				created_at: result.created_at,		
				read: result.read,
				comment: result.comment,
			};
		});

		payload = {'user-mentions-list': datas}; 
		return this._super(store, primaryType, payload);
	}
});