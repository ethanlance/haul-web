Haul.Image = DS.Model.extend({
	orignal: DS.attr('string'),
	small: DS.attr('string'),
	thumb: DS.attr('string'),
	caption: DS.attr('string'),
	user_id: DS.attr('string'),
	created_at: DS.attr('number')
});

Haul.ImageSerializer =  DS.RESTSerializer.extend({
	
	normalizePayload: function(store, payload) { 

		//TODO: Get user's id from localstorage.
		var user_id = Ember.$.cookie('auth_user').id;
		
		var data = payload.data.map(function(image) {
			return {
				original: image.locations.original,
				small: image.locations.small,
				thumb: image.locations.thumb,
				caption: image.caption,
				user_id: user_id,
				id: image.image_id,
				created_at: image.created_at
			};
		});
		
	    return this._super(store, {'images': data});
	}
});

Haul.ImageAdapter = Haul.ApplicationAdapter.extend({
	
	host: Haul.IMAGE_SERVER_HOST,

    buildURL: function(klass, id) {
    	return this.host + "/users/" + id + "/images";
	},

	findQuery: function(store, type, query) {

		$.ajaxSetup({
			headers: {
			  'Authorization': 'Bearer ' + Ember.$.cookie('access_token')
			}
		});
		return this.ajax(this.buildURL(store, query), 'GET');
		
	}
});


