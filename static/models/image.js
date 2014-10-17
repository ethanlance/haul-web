Haul.Image = DS.Model.extend({
	orignal: DS.attr('string'),
	medium: DS.attr('string'),
	large: DS.attr('string'),
	small: DS.attr('string'),
	thumb: DS.attr('string'),
	caption: DS.attr('string'),
	user_id: DS.attr('string'),
	created_at: DS.attr('number')
});

Haul.ImageSerializer =  DS.RESTSerializer.extend({

	extractFindMany: function(store, type, payload){
		if( payload.data.type === "image" ){
			return [this.extractSingle(store, type, payload)];
		}else{
			return this.extractArray(store, type, payload);
		}
    },

	extractArray: function(store, primaryType, payload) {

		var datas = payload.data.map(function(image){
			var data =  {
				original: image.locations.original,
				small: image.locations.small,
				thumb: image.locations.thumb,
				caption: image.caption,
				id: image.image_id,
				created_at: image.created_at
			}
			image.locations.large ? data.large = image.locations.large : data.large = image.locations.small;
			image.locations.medium ? data.medium = image.locations.medium : data.medium = image.locations.small;
			return data;
		}); 

		var payload = {'images': datas}; 
		return this._super(store, primaryType, payload);
	},

	extractSingle: function(store, primaryType, payload, recordId, requestType) {
		var image = payload.data;
		var data = {
			original: image.locations.original,
			small: image.locations.small,
			thumb: image.locations.thumb,
			caption: image.caption,
			id: image.image_id,
			created_at: image.created_at
		};

		image.locations.large ? data.large = image.locations.large : data.large = image.locations.small;
		image.locations.medium ? data.medium = image.locations.medium : data.medium = image.locations.small;

		var payload ={'image': data}; 
		return this._super(store, primaryType, payload);
	},

});

Haul.ImageAdapter = Haul.ApplicationAdapter.extend({
	
	host: Haul.IMAGE_SERVER_HOST,

  
	findMany: function(store, type, ids) { 
		if( ids.length < 2 ){
			var url = this.host + "/images/" + ids[0];
			return this.ajax(url, 'GET');
		}else{	
			var url = this.host + "/images";
			return this.ajax(url, 'GET', { data: { image_ids: ids } });
		}
	},

    //FIND IMAGES FOR A USERID
	findQuery: function(store, type, query) {
		$.ajaxSetup({
			headers: {
			  'Authorization': 'Bearer ' + Ember.$.cookie('access_token')
			}
		});
		var url = this.host + '/users/' + query + '/images';
		return this.ajax(url, 'GET');
		
	}
});


