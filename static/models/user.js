
//LOCAL STORAGE:
//This is where we store the current user.
Haul.LocalUser = DS.Model.extend({
	name: DS.attr('string'),
	slug: DS.attr('string'),
	email: DS.attr('string'),
	picture: DS.attr('string'),

	access_token: DS.attr('string'),
	refresh_token: DS.attr('string'),	
	current: DS.attr('boolean'),

	//Get's the user model.
	user: function(){
		var store = this.store;
		var user_id = this.get('id');		
		var promise = store.find('user', {id: user_id}); 
		var promise = promise.then(function(results){
			return results.get('firstObject')
		});
		return DS.PromiseObject.create({
			promise: promise
		});
	}.property(),
});
Haul.LocalUserAdapter = Haul.LSAdapter.extend({});
Haul.LocalUserSerializer = Haul.LSSerializer.extend({});



//User Model.
Haul.User = DS.Model.extend({
	name: DS.attr('string'),
	slug: DS.attr('string'),
	email: DS.attr('string'),
	picture: DS.attr('string'),

	market: function() {
		var store = this.store;
		var user_id = this.get('id');		
		var promise = store.find('user-market', {user_id: user_id})
		.then(function(userMarkets){
			return userMarkets.get('firstObject')
		});
		return DS.PromiseObject.create({
			promise: promise
		});
	}.property(),

	products: function() {
		var store = this.store;
		var user_id = this.get('id');

		store.find('product-list', {user_id: user_id});

		return store.filter('product-list', function(product){
			var user = product.get('user');
			if( user && user.get('id') == user_id ) {
				return product;
			}
		});
	}.property()
});

Haul.UserAdapter = Haul.ApplicationAdapter.extend({
	
	host: Haul.USER_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/users/" + id;  
        return this.ajax(url, 'GET');
    },

	findQuery: function(store, type, query) { 
        var url = this.host + "/users/" + query.id;
        return this.ajax(url, 'GET');
    },    
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



/** Users' Markets **/
Haul.UserMarket = DS.Model.extend({
	user: DS.belongsTo('user'),
	market: DS.belongsTo('market'),
	market_name: DS.attr('string'),
	market_id: DS.attr('string'),
});

Haul.UserMarketAdapter = Haul.ApplicationAdapter.extend({
	
	host: Haul.STORE_SERVER_HOST,

	findQuery: function(store, type, query) { 
        var url = this.host + "/users/" + query.user_id + "/stores"; 
        return this.ajax(url, 'GET');
    },

});


Haul.UserMarketSerializer =  DS.RESTSerializer.extend({
extractArray: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data == "ok" ){
			return;
		}
		var data = payload.data.map(function(result){
			var id = result.store_id + result.user_id;
			return {
				id: id,
				market_id: result.store_id,	
				market_name: result.store_name,	
				user: result.user_id,
				market: result.store_id
			}
		});

		var payload = {'user-market': data}; 

		return this._super(store, primaryType, payload, recordId, requestType);
	},
});