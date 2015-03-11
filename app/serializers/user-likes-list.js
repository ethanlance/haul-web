import DS from 'ember-data';
import MetaSerializer from '../mixins/meta_serializer';
export default DS.RESTSerializer.extend( MetaSerializer,{ 

	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok"){
			return;
		} 

		var user_id = null;
		var post_id = null;

		var data = null;
		var datas = payload.data.map(function(result){
			return {
				id: result.subject.id,	
				post:result.subject.id,		
				user:result.user_id,
				created_at: result.created_at,		
				post_id: result.subject.id,
				user_id:result.user_id,
			}
		});

		payload = {'user-likes-list': datas}; 
		return this._super(store, primaryType, payload);
	}
});