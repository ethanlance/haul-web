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
				id: result.name,	
				name: result.name,
				price: result.price,
				image: result.image_id
			};
		});

		payload = {'search-user': data}; 
		return this._super(store, primaryType, payload);
	},
});
