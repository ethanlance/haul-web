
//Models
Haul.Market = DS.Model.extend(Ember.Validations.Mixin, {

	name: DS.attr( 'string' ),
	description: DS.attr( 'string' ),
	user_id: DS.attr( 'string' ), 
	user: DS.belongsTo('user'),
	slug: DS.attr( 'string' ),
	isFollowedByCount: DS.belongsTo('market-is-followed-by-count'), 

	image: DS.belongsTo('image'),
	image_id: DS.attr('string'), 
	//imageIdChanged is fired when a new image_id is assigned to the model.
	//this happens when a user uploads a new user icon for their market.
	imageIdChanged: function() {
		this.getIconImage();
	}.observes('image_id'),

	//getIconImage asks the API for the market image.
	//If the size thumb is not retured it asks the API for the image again for "retryTimes" times.
	//When a user uploads a new market profile image it takes time for the image resizer to crunch
	//all the image sizes.
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
				if( !image.get('thumb') && i < retryTimes ) { 
				} else { 
					window.clearInterval(_this.getThumbInterval);
					_this.set('image', image);
				} 
			});
		} 

		//Get the thumb
		_this.store.find('image', image_id)
		.then(function(image){ 
			return image; 
		}).then(function(image) { 
			if( !image.get('thumb') && i < retryTimes ) { 
				_this.getThumbInterval = setInterval(function () { 
					waitingForResponse();
				}, retryWait); 
			} else {
				_this.set('image', image);
			}
		});
	},

	// //Get's the user model.
	products: function(){
		var store = this.store;
		var id = this.get('id');		
		store.find('market-product-list', {market_id: id}); 
		return store.filter('market-product-list', function(mp){ 
			if( mp.get('market_id')  == id ) return mp;
		});

	}.property(),

	validations: { 
		name: {
		 	presence: true,
		 	length: { minimum: 3, maximum: 50 }
		},
		description: {
		 	presence: true,
		 	length: { maximum: 500 }
		}
	}
});	
 



Haul.MarketAdapter = Haul.ApplicationAdapter.extend({
	
	host: Haul.STORE_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/stores/" + id; 
        return this.ajax(url, 'GET');
    },

	
	findQuery: function(store, type, query) { 
        var url = this.host + "/users/" + query.user_id + "/products";
        return this.ajax(url, 'GET');
    },    
 

	updateRecord: function(store, type, record) {
		var data = {
			name: record.get('name'),
			description: record.get('description'),
			user_id: record.get('user_id')
		}

        var store_id = record.get('id');
		var url = this.host + "/stores/" + store_id;

		return this.ajax(url, "PUT", { data: data });
	},

	createRecord: function(store, type, record) {

		var data = {
			name: record.get('name'),
			description: record.get('description'),
			user_id: record.get('user_id')
		}
		
		var url = this.host + "/stores";
		return this.ajax(url, "POST", { data: data }); 
	}
});
 

Haul.MarketSerializer =  DS.RESTSerializer.extend({

	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data == "ok" ){
			console.log("OK:", store, primaryType, payload, recordId, requestType);
			return;
		}

		var data = {
			id: payload.data.store_id,	
			name: payload.data.name,
			slug: payload.data.name,
			description: payload.data.description,
			user: payload.data.user_id,
			user_id: payload.data.user_id,
			isFollowedByCount: payload.data.store_id,
			image: payload.data.image_id
		};


		// if( payload.data.product_ids){
		// 	data['products'] = payload.data.product_ids
		// }

		var payload = {'market': data}; 
		
		return this._super(store, primaryType, payload, recordId, requestType);
	},
});


