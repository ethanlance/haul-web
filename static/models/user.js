Haul.User = DS.Model.extend({
	name: DS.attr('string'),
	slug: DS.attr('string'),
	email: DS.attr('string'),
	picture: DS.attr('string'),
	
	products: function( ) {
		var store = this.store;
		var user_id = this.get('id');

		var promise = store.find('product', {user_id: user_id});

		return store.filter('product', function(product){
			var user = product.get('user');
			if( user && user.get('id') == user_id ) {
				return product;
			}
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
				slug: payload.data.user_id, //slug
				picture: 'https://scontent-b-sea.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/10341537_10152440039729993_433672478264276159_n.jpg?oh=ae0a64b3b3bb714b2f9a79e34f0fb8b9&oe=54B9FD9B'
			}]
		}; 

	    return this._super(store, data);
	}
});






