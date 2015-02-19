import DS from 'ember-data';
export default DS.RESTSerializer.extend({

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

		var datas = [];
		payload.data.forEach(function(image){
			if( image.hasOwnProperty("image_id") ){
				var data =  {
					original: image.locations.original,
					small: image.locations.small,
					thumb: image.locations.thumb,
					caption: image.caption,
					id: image.image_id,
					created_at: image.created_at
				};
 
				data.large = image.locations.large;
				data.medium = image.locations.medium;
				
				datas.push(data);
			} 
		}); 

		

		payload = {'images': datas}; 
		return this._super(store, primaryType, payload);
	},

	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok" ){
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
 
		data.large = image.locations.large;
		data.medium = image.locations.medium;

		payload ={'images': data}; 
		return this._super(store, primaryType, payload, recordId, requestType);
	},

});