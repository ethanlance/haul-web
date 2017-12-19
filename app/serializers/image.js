import DS from 'ember-data';
export default DS.RESTSerializer.extend({

	extractFindMany: function(store, type, payload){
		if( payload.data.type === "image" ){
			return [this.extractSingle(store, type, payload)];
		}else{
			return this.extractArray(store, type, payload);
		}
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
			square: image.locations.square,
			

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