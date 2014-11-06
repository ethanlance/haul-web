

//Models
Haul.MarketProductList = DS.Model.extend(Ember.Validations.Mixin, {
	editorial: DS.attr('string'),
	currency: DS.attr('string'),
	price: DS.attr('string'),
	name: DS.attr('string'),
	product_id: DS.attr('string'),
	market_id: DS.attr('string'),

	user: DS.belongsTo('user'),
	market: DS.belongsTo('market'),
	product: DS.belongsTo('product'),
	image: DS.belongsTo('image'),

	validations: { 
		editorial: {
		 	presence: true,
		 	length: { maximum: 2000, minimum: 0 }
		}
	}
});	





Haul.MarketProductListAdapter = Haul.ApplicationAdapter.extend({
	
	host: Haul.STORE_SERVER_HOST,

	find: function(store, type, args) {
		console.log("FUCK YOU")
	},  

    findMany: function(store, type, ids, record) {  
		var url = this.host + "/stores/" + record.get('id') + "/products"; 
		return this.ajax(url, 'GET');
	},

	
	findQuery: function(store, type, query) { 
        var url = this.host + "/stores/" + query.market_id + "/products";
        return this.ajax(url, 'GET');
    }
});
 

Haul.MarketProductListSerializer =  DS.RESTSerializer.extend({ 

	extractArray: function(store, primaryType, payload) {

		if( payload.data == "ok" ){
			return;
		}
		
		var data = payload.data.map(function(result){ 
			var id =  result.product_id + result.store_id;
			return {
				id: id,	
				editorial: result.editorial,
				currency: result.product_currency,				
				price: result.product_price,
				name: result.product_name,
				product_id: result.product_id,
				market_id: result.store_id,

				//market: result.store_id,	
				product: result.product_id,
				image: result.product_image_id,
			}
		}); 

		var payload = {'market-product-list': data};  
		return this._super(store, primaryType, payload);
	}
});


