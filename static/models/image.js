Haul.Image = DS.Model.extend({
	src: DS.attr('string'),
	caption: DS.attr('string')
});

Haul.ImageSerializer =  DS.RESTSerializer.extend({
	
	normalizePayload: function(store, payload) {
		
		var data = payload.data.map(function(image) {
			return {
				src: image.locations.original,
				caption: image.caption,
				locations: image.locations,
				user_id: image.user_id,
				id: image.image_id
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


