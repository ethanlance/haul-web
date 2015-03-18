import DS from 'ember-data';
import MetaSerializer from '../mixins/meta_serializer';
export default DS.RESTSerializer.extend( MetaSerializer,{ 
	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){ 
			return;
		}
 		
 		var data = [];
		var user_id;
		data = payload.data.map(function(result){ 
			return {
				id: result.name,
				name: result.name,
				total: result.total,
			};
		});

		payload = {'search-hashtag': data}; 
		return this._super(store, primaryType, payload);
	},
});
