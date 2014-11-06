

//Models
Haul.MarketProduct = DS.Model.extend(Ember.Validations.Mixin, {
	editorial: DS.attr('string'),

	product: DS.belongsTo('product'),
	market: DS.belongsTo('market'),

	validations: { 
		editorial: {
		 	presence: true,
		 	length: { maximum: 2000, minimum: 0 }
		}
	}
});	

Haul.MarketProductAdapter = Haul.ApplicationAdapter.extend({
	
	host: Haul.STORE_SERVER_HOST,

	findQuery: function(store, type, args) {
		var url = this.host + "/stores/" + args.market_id + "/products/" + args.product_id;
        return this.ajax(url, 'GET');
    },

    deleteRecord: function(store, type, record ) {
    
    	record.rollback();

      	var data = {user_id:  this.get('currentUserId')}
		var market_id = record.get('market').get('id');
		var product_id = record.get('product').get('id');
		var url = this.host + "/stores/" + market_id + "/products/" + product_id;

		//record.rollforward()?

		return this.ajax(url, "DELETE", {data: data} );
	},    
 
	updateRecord: function(store, type, record) {

		var data = {
			editorial: record.get('editorial'),
			user_id: this.get('currentUserId')
		}

		var market_id = record.get('market').get('id');
		var url = this.host + "/stores/" + market_id + "/products/" + record.get('product').get('id');
		return this.ajax(url, "PUT", { data: data }); 
	},

	createRecord: function(store, type, record) {

		var data = {
			editorial: record.get('editorial'),
			user_id: this.get('currentUserId')
		}

		var market_id = record.get('market').get('id');
		var url = this.host + "/stores/" + market_id + "/products/" + record.get('product').get('id');
		return this.ajax(url, "PUT", { data: data }); 
	}
});

Haul.MarketProductSerializer =  DS.RESTSerializer.extend({


	//Need this for Delete, Update record
	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data == "ok" ){
			return;
		}
	},

	extractArray: function(store, primaryType, payload) {

		if( payload.data == "ok" ){
			return;
		} 
		
		var id = payload.data.product_id + payload.data.store_id; 
		var data = {
			id: id,	
			editorial: payload.data.editorial,
			product: payload.data.product_id,
			market: payload.data.store_id
		} 

		var payload = {'market-product': [data]};  
		return this._super(store, primaryType, payload);
	}
});


