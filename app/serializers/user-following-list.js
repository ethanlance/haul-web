import DS from 'ember-data';
import MetaSerializer from '../mixins/meta_serializer';
export default DS.RESTSerializer.extend( MetaSerializer,{ 

	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){ 
			return;
		}

		var datas = payload.data.map(function(result){ 
			return {
				created_at: result.created_at,
				user: result.subject.id,
				user_id: result.user_id,
				id: result.marker_id,
			}
		}); 

		payload = {'user-following-list': datas}; 
		return this._super(store, primaryType, payload);
	}
});