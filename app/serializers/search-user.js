import DS from 'ember-data';
import MetaSerializer from '../mixins/meta_serializer';
export default DS.RESTSerializer.extend( MetaSerializer,{ 
	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){ 
			return;
		}
 		
 		var data = [];
		data = payload.data.map(function(result){ 
			return {
				id: result.user_id,	
				facebook_user_id: result.facebook_user_id,
				follows_total: result.follows_total,
				name: result.name,
				username: result.username,
				user_id: result.user_id,
				user: result.user_id,
				image: result.image_id
			};
		});

		payload = {'search-user': data}; 
		return this._super(store, primaryType, payload);
	},
});
