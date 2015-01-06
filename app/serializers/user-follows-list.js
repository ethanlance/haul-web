import DS from 'ember-data';

var UserFollowsListSerializer =  DS.RESTSerializer.extend({

	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){ 
			return;
		}

 		var data = [];
		data = payload.data.map(function(result){ 
				
			var id;
			var user_id = false;
			var collection_id = false;

			if( result.object.type === 'user'){
				user_id = result.object.id;
				id =  result.user_id + ":" + user_id;
			}
			if( result.object.type === 'store'){
				collection_id = result.object.id;
				id =  result.user_id + ":" + collection_id;
			}

			var arr = { id: id, user_id: id } ;
			if( collection_id ){
				arr['follows_collection'] = collection_id;
			}
			if( user_id ){
				arr['follows_user'] = user_id;
			}

			return arr;
		});

		payload = {'user-follows-list': data}; 
		return this._super(store, primaryType, payload);
	}
});
export default UserFollowsListSerializer;