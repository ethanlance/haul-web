Haul.UserImage = DS.Model.extend({
	original: DS.attr('string'),
	medium: DS.attr('string'),
	large: DS.attr('string'),
	small: DS.attr('string'),
	thumb: DS.attr('string'),
	caption: DS.attr('string'),
	user_id: DS.attr('string'),
	created_at: DS.attr('number')
});

Haul.UserImageSerializer =  Haul.RESTSerializer.extend({

	extractFindMany: function(store, type, payload){
		if( payload.data.type === "image" ){
			return [this.extractSingle(store, type, payload)];
		}else{
			return this.extractArray(store, type, payload);
		}
    },

	extractArray: function(store, primaryType, payload) {

		if( payload.data == "ok" ){
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
				}
 
				image.locations.large ? data.large = image.locations.large : data.large = null;
				image.locations.medium ? data.medium = image.locations.medium : data.medium = null;
				
				datas.push(data);
			} 
		}); 
 
		var payload = {'user-image': datas}; 
		console.log('pay', payload)
		return this._super(store, primaryType, payload);
	},

	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data == "ok" ){
			return;
		}

		var image = payload.data;
		var data = {
			original: image.locations.original,
			small: image.locations.small,
			thumb: image.locations.thumb,
			caption: image.caption,
			id: image.image_id,
			created_at: image.created_at
		};
 
		image.locations.large ? data.large = image.locations.large : data.large = null;
		image.locations.medium ? data.medium = image.locations.medium : data.medium = null;

		var payload ={'user-image': data}; 
		console.log('pays', payload)
		return this._super(store, primaryType, payload);
	},

});

Haul.UserImageAdapter = Haul.ApplicationAdapter.extend({
	
	host: Haul.IMAGE_SERVER_HOST,
    
	deleteRecord: function(store, type, record) {
		var id = record.get('id');
		var user_id = this.get('currentUserId');
		var url = this.host + '/users/' + user_id + '/images/' + id;
		return this.ajax(url, "DELETE");
	}, 

    //FIND IMAGES FOR A USERID
	findQuery: function(store, type, query) { 
		var url = this.host + '/users/' + query + '/images'; 
		return this.ajax(url, 'GET');
	}
});


