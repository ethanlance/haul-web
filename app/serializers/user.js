import DS from "ember-data";
export default DS.RESTSerializer.extend({

	extractSingle: function(store, type, payload, recordId, requestType) {
		var data =  {
			username: payload.data.username,
			name: payload.data.name,
			email: payload.data.email,
			id: payload.data.user_id,
			
			getLikesCount: payload.data.user_id,
			//getLikes: payload.data.user_id,

			getFollowingCount: payload.data.user_id,
			//getFollowing: payload.data.user_id,

			getFollowersCount: payload.data.user_id,
			//getFollowers: payload.data.user_id,

			image_id: payload.data.image_id,
			image: payload.data.image_id
		};

		if( payload.data.facebook_user_id ){
			data.facebook_user_id = payload.data.facebook_user_id;
		}

		payload = {'user': data}; 
		console.log("SINGLE USER", payload)
		return this._super(store, type, payload, recordId, requestType);
	},


	extractFindMany: function(store, type, payload){
		
		if( payload.data.type === "user" ){
			return [this.extractSingle(store, type, payload)];
		}else{
			return this.extractArray(store, type, payload);
		}
    },
});