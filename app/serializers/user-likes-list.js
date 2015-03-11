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
			
			var id = result.subject.id;
			data = {
				id: id,	
				post:id,		
				user:result.user_id,		

				post_id: id,
				user_id:result.user_id,
			}
			return data;
		});

		payload = {'user-likes-list': datas}; 
		return this._super(store, primaryType, payload);
	}
});