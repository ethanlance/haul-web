
//Models
Haul.Market = DS.Model.extend(Ember.Validations.Mixin, {

	name: DS.attr( 'string' ),
	description: DS.attr( 'string' ),
	user_id: DS.attr( 'string' ),
 
	isFollowedByCount: DS.belongsTo('market-is-followed-by-count'),

	//products: DS.hasMany('market-product-list',{async:true}),
	user: DS.belongsTo('user'),
	slug: DS.attr( 'string' ),

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
		 	length: { minimum: 2 }
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
			isFollowedByCount: payload.data.store_id
		};


		// if( payload.data.product_ids){
		// 	data['products'] = payload.data.product_ids
		// }

		var payload = {'market': data}; 
		
		return this._super(store, primaryType, payload, recordId, requestType);
	},
});


