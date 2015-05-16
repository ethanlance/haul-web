import DS from "ember-data";
export default DS.RESTSerializer.extend({

	extractSingle: function(store, type, payload, recordId, requestType) {
		if( payload.data === "ok" ){
			return;
		}
		
		var data =  {
			username: payload.data.username,
			name: payload.data.name,
			firstname: payload.data.firstname,
			lastname: payload.data.lastname,
			display_name: payload.data.display_name,
			bio: payload.data.bio,
			email: payload.data.email,
			id: payload.data.user_id,
			
			getLikesCount: payload.data.user_id,
			getFollowingCount: payload.data.user_id,
			getFollowersCount: payload.data.user_id,
			getPostsCount: payload.data.user_id,
			getMentionsCount: payload.data.user_id,
			getUnreadMentionsCount: payload.data.user_id,

			image_id: payload.data.image_id,
			image: payload.data.image_id
		};

		if( payload.data.facebook_user_id ){
			data.facebook_user_id = payload.data.facebook_user_id;
		}

		payload = {'user': data}; 
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