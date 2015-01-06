import Ember from 'ember';
import DS from 'ember-data';

var CollectionFollowersListSerializer =  DS.RESTSerializer.extend({

	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok" ){
			return;
		}

		if( Ember.isEmpty(payload.data)){ 
			payload = {'collection-followers-list': {id:1} }; 
			return this._super(store, primaryType, payload);
		}

		
		var collection_id = null;
		var follower_ids = [];

		payload.data.map(function(result){ 
			collection_id =  result.object.id;
			follower_ids.push( result.user_id );
			return;
		}); 

		var data = {
			id: collection_id,	
			collection: collection_id,
			followers: follower_ids
		};
	
		payload ={'collection-followers-list': data}; 
		return this._super(store, primaryType, payload, recordId, requestType);
	}
});
export default CollectionFollowersListSerializer;