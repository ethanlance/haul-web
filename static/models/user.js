Haul.User = DS.Model.extend({
	name: DS.attr('string'),
	slug: DS.attr('string'),
	email: DS.attr('string'),
	picture: DS.attr('string'),
	products: DS.hasMany('product',{async:true}),
	
	apiKeys: DS.hasMany('apiKey'),

	images: function() {
		var promise = this.store.findQuery('image', this.id).then(function(results){
			return results;
		});
		return DS.PromiseArray.create({
  			promise: promise
		});
	}.property('images'), 
});

Haul.UserSerializer =  DS.RESTSerializer.extend({
	normalizePayload: function(store, payload) {

		var slug = payload.data.name.replace(" ", "").toLowerCase();

		var data = {"user":[{
				name: payload.data.name,
				email: payload.data.email,
				id: payload.data.user_id,
				slug: payload.data.user_id //slug
			}]
		}; 

	    return this._super(store, data);
	}
});

Haul.UserAdapter = Haul.ApplicationAdapter.extend({});