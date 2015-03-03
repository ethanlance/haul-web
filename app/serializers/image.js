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
					
					thumb: image.locations.thumb,
					small: image.locations.small,
					medium: image.locations.medium,
					large: image.locations.large,

					caption: image.caption,
					id: image.image_id,
					created_at: image.created_at
				};
				
				datas.push(data);
			} 
		}); 

		if(!data.large){
			if(data.medium){
				data.large = data.medium;
			}else if(data.small) {
				data.large = data.small;
			}
		}

		if(!data.medium){
			if(data.small){
				data.medium = data.small;
			}
		}

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

			thumb: image.locations.thumb,
			small: image.locations.small,
			large: image.locations.large,
			medium: image.locations.medium,
			

			caption: image.caption,
			id: image.image_id,
			created_at: image.created_at
		};
 

 		if(!data.large){
			if(data.medium){
				data.large = data.medium;
			}else if(data.small) {
				data.large = data.small;
			}
		}

		if(!data.medium){
			if(data.small){
				data.medium = data.small;
			}
		}


		payload ={'images': data}; 
		return this._super(store, primaryType, payload, recordId, requestType);
	},

});