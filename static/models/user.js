Haul.User = DS.Model.extend({
	name: DS.attr('string'),
	slug: DS.attr('string'),
	email: DS.attr('string'),
	picture: DS.attr('string'),
	
	products: function( ) {
		var store = this.store;
		var user_id = this.get('id');

		var promise = store.find('product', {user_id: user_id})
		
		promise.then(function(results){
			return store.filter('product', function(product){
				var user = product.get('user');
				if( user && user.get('id') == user_id ) {
					return product;
				}
			});
		});
		
		return DS.PromiseArray.create({
  			promise: promise
		});
	}.property(),

	
	apiKeys: DS.hasMany('apiKey')
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






