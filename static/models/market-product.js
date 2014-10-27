

//Models
Haul.MarketProduct = DS.Model.extend(Ember.Validations.Mixin, {
	editorial: DS.attr('string'),
	user: DS.belongsTo('user'),
	featured: DS.attr('boolean'),
	product: DS.belongsTo('product'),
	image: DS.belongsTo('image')
});	
 




Haul.MarketProductAdapter = Haul.ApplicationAdapter.extend({
	
	host: Haul.STORE_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/stores/" + id; 
        return this.ajax(url, 'GET');
    },

    findMany: function(store, type, ids, record) {  
		var url = this.host + "/stores/" + record.get('id') + "/products";
		return this.ajax(url, 'GET');
	},

	
	findQuery: function(store, type, query) {
		console.log("HERE?")
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
			editorial: record.get('editorial'),
			user_id: record.get('user').get('id')
		}

		var store_id = record.get('market').get('market_id');
		var url = this.host + "/stores/" + store_id + "/products/" + record.get('product').get('id');
		return this.ajax(url, "PUT", { data: data }); 
	}
});
 

Haul.MarketProductSerializer =  DS.RESTSerializer.extend({

	extractArray: function(store, primaryType, payload) {

		if( payload.data == "ok" ){
			return;
		}
		
		var data = payload.data.map(function(result){
			return {
				id: result.product_id,	
				editorial: result.editorial,
				//product_currency: result.product_currency,
				product: result.product_id,
				image: result.product_image_id,
				// product_name: result.product_name,
				// product_price: result.product_price,
			}
		}); 

		console.log("DATA" , data)
		var payload = {'market-product': data}; 
		return this._super(store, primaryType, payload);
	},

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
			user: payload.data.user_id
		};


		var payload ={'market-product': data}; 
		return this._super(store, primaryType, payload, recordId, requestType);
	},
});


