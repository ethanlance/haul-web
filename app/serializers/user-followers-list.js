import DS from 'ember-data';
import MetaSerializer from '../mixins/meta_serializer';
export default DS.RESTSerializer.extend( MetaSerializer,{ 

	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){
			return;
		} 
		 
		var datas = payload.data.map(function(result){
			return {
				user: result.user_id,
				user_id: result.subject.id,
				id: result.marker_id,
			}
		}); 

		payload = {'user-followers-list': datas}; 
		return this._super(store, primaryType, payload);
	}
});