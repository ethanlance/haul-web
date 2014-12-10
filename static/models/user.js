
//LOCAL STORAGE:
//This is where we store the current user.
Haul.LocalUser = DS.Model.extend({
	name: DS.attr('string'),
	slug: DS.attr('string'),
	email: DS.attr('string'),
	iconBinding: 'user.icon',

	access_token: DS.attr('string'),
	refresh_token: DS.attr('string'),	
	current: DS.attr('boolean'), 

	//Get's the user model.
	user: DS.belongsTo('user')
});
Haul.LocalUserAdapter = Haul.LSAdapter.extend({});
Haul.LocalUserSerializer = Haul.LSSerializer.extend({});



//User Model.
Haul.User = DS.Model.extend({
	name: DS.attr('string'),
	slug: DS.attr('string'),
	email: DS.attr('string'),
	facebook_user_id: DS.attr('string'),
	image: DS.belongsTo('image'),
	image_id: DS.attr('string'), 

	isFollowedByCount: DS.belongsTo('user-is-followed-by-count'),
	isFollowingCount: DS.belongsTo('user-is-following-count'),

	icon: DS.attr('string'), 
	iconChange: function() { 
		Ember.run.once(this, 'iconChangeSync');
	}.observes('image_id', 'facebook_user_id').on('init'),

	iconChangeSync: function() {
		if( this.get('image_id') ){
			this.getIconImage();
		}else if( this.get('facebook_user_id') ) { 
			this.getIconFacebook()
		} 
	},

	getIconFacebook: function() {
		var url = "https://graph.facebook.com/" + this.get('facebook_user_id') + "/picture?width=200";
		this.set('icon', url);
	},

	getIconImage: function() {
		var _this = this;
		var image_id = this.get('image_id')
		var i = 0;
		var retryTimes = 10;
		var retryWait = 2000;

		//If no thumb returns, then try again.
		//This happens when icons are uploaded, the image
		//takes time to crunch.
		function waitingForResponse() {
			i++;
			_this.store.find('image', image_id)
			.then(function(image){
				return image.reload();	
			}).then(function(image) {
				var thumb  = image.get('thumb');
				if( !thumb && i < retryTimes ) { 
				} else { 
					window.clearInterval(_this.getThumbInterval);
					_this.set('icon', thumb);
				} 
			});
		} 

		//Get the thumb
		_this.store.find('image', image_id)
		.then(function(image){ 
			return image; 
		}).then(function(image) {
			var thumb  = image.get('thumb');
			if( !thumb && i < retryTimes ) { 
				_this.getThumbInterval = setInterval(function () { 
					waitingForResponse();
				}, retryWait); 
			} else {
				_this.set('icon', thumb);
			}
		});
	},

	collections: function() {
		var store = this.store;
		var user_id = this.get('id');
		store.find('user-collection', {user_id: user_id});
 
		return store.filter('user-collection', function(result){  
			if( result.get('user_id') == user_id ) { 
				return result;
			}
		}); 
	}.property(),

	products: function() {
		var store = this.store;
		var user_id = this.get('id');

		store.find('product-list', {user_id: user_id});

		return store.filter('product-list', function(product){
			if( product.get('user_id') == user_id ) {
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

		var data =  {
			name: payload.data.name,
			email: payload.data.email,
			id: payload.data.user_id,
			slug: payload.data.user_id,
			isFollowedByCount: payload.data.user_id,
			isFollowingCount: payload.data.user_id,
			image_id: payload.data.image_id,
			image: payload.data.image_id
		}  

		if( payload.data.facebook_user_id ){
			data['facebook_user_id'] = payload.data.facebook_user_id;
		}

		var payload = {'user': [data]}; 
	    return this._super(store, payload);
	}
});



/** Users' Collections **/
Haul.UserCollection = DS.Model.extend({
	user: DS.belongsTo('user'),
	user_id: DS.attr('string'),
	collection: DS.belongsTo('collection'),
	collection_name: DS.attr('string'),
	collection_id: DS.attr('string'),
	slug: DS.attr('string'),
});

Haul.UserCollectionAdapter = Haul.ApplicationAdapter.extend({
	
	host: Haul.STORE_SERVER_HOST,

	findQuery: function(store, type, query) { 
        var url = this.host + "/users/" + query.user_id + "/stores"; 
        console.log("URL", url);
        return this.ajax(url, 'GET');
    },

});


Haul.UserCollectionSerializer =  DS.RESTSerializer.extend({

	extractArray: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data == "ok" ){
			return;
		}
		var data = payload.data.map(function(result){
			var id = result.store_id + result.user_id;
			return {
				id: id,
				collection_id: result.store_id,	
				collection_name: result.store_name,	
				user_id: result.user_id,
				user: result.user_id,
				collection: result.store_id,
				slug: result.slug
			}
		});

		var payload = {'user-collection': data}; 

		return this._super(store, primaryType, payload, recordId, requestType);
	},
});