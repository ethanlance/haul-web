import DS from "ember-data";

var UserSerializer =  DS.RESTSerializer.extend({

	extractSingle: function(store, type, payload, recordId, requestType) {
		var data =  {
			name: payload.data.name,
			email: payload.data.email,
			id: payload.data.user_id,
			slug: payload.data.user_id,
			getFollowedByCount: payload.data.user_id,
			getFollowingCount: payload.data.user_id,
			image_id: payload.data.image_id,
			image: payload.data.image_id
		};

		if( payload.data.facebook_user_id ){
			data['facebook_user_id'] = payload.data.facebook_user_id;
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

	// normalizePayload: function(store, payload) {

	// 	//var slug = payload.data.name.replace(" ", "").toLowerCase();

	// 	var data =  {
	// 		name: payload.data.name,
	// 		email: payload.data.email,
	// 		id: payload.data.user_id,
	// 		slug: payload.data.user_id,
	// 		getFollowedByCount: payload.data.user_id,
	// 		getFollowingCount: payload.data.user_id,
	// 		image_id: payload.data.image_id,
	// 		image: payload.data.image_id
	// 	};

	// 	if( payload.data.facebook_user_id ){
	// 		data['facebook_user_id'] = payload.data.facebook_user_id;
	// 	}

	// 	payload = {'user': [data]}; 
	//     return this._super(store, payload);
	// }
});
export default UserSerializer;