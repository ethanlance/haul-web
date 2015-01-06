import Ember from 'ember';
import DS from 'ember-data';

var UserFollowersListSerializer =  DS.RESTSerializer.extend({

	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok" ){
			return;
		}

		if( Ember.isEmpty(payload.data)){ 
			payload = {'user-followers-list': {id:1} }; 
			return this._super(store, primaryType, payload);
		}

		
		var user_id = null;
		var follower_ids = [];

		payload.data.map(function(result){ 
			user_id =  result.object.id;
			follower_ids.push( result.user_id );
			return;
		}); 

		var data = {
			id: user_id,	
			user: user_id,
			followers: follower_ids
		};
	
		payload ={'user-followers-list': data}; 
		return this._super(store, primaryType, payload, recordId, requestType);
	}
});
export default UserFollowersListSerializer;