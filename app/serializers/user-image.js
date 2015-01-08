import DS from 'ember-data';

var UserImageSerializer =  DS.RESTSerializer.extend({

	extractFindMany: function(store, type, payload){
		if( payload.data.type === "image" ){
			return [this.extractSingle(store, type, payload)];
		}else{
			return this.extractArray(store, type, payload);
		}
    },

	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){
			return;
		}

		var user_id = this.get('currentUserId'); 

		var datas = [];
		payload.data.forEach(function(image){
			if( image.hasOwnProperty("image_id") ){
				var data =  {
					original: image.locations.original,
					thumb: image.locations.thumb,
					small: image.locations.small,
					medium: image.locations.medium,
					large: image.locations.large,
					caption: image.caption,
					id: image.image_id,
					created_at: image.created_at,
					user_id: user_id 
				};  
				datas.push(data);
			} 
		}); 
 
		payload = {'user-image': datas};  

		return this._super(store, primaryType, payload);
	},

	extractSingle: function(store, primaryType, payload) {

		if( payload.data === "ok" ){
			return;
		}

		var image = payload.data;
		var data = {
			original: image.locations.original,
			large: image.locations.large,
			medium: image.locations.medium,
			small: image.locations.small,
			thumb: image.locations.thumb,
			caption: image.caption,
			id: image.image_id,
			created_at: image.created_at
		};
 
		data.large = image.locations.large;
		data.medium = image.locations.medium;

		payload ={'user-image': data}; 
		
		return this._super(store, primaryType, payload);
	},

});
export default UserImageSerializer;