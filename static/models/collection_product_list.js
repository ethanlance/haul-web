

//Models
Haul.CollectionProductList = DS.Model.extend(Ember.Validations.Mixin, {
	editorial: DS.attr('string'),
	currency: DS.attr('string'),
	price: DS.attr('string'),
	name: DS.attr('string'),
	product_id: DS.attr('string'),
	collection_id: DS.attr('string'),

	user: DS.belongsTo('user'),
	collection: DS.belongsTo('collection'),
	product: DS.belongsTo('product'),
	image: DS.belongsTo('image'),

	validations: { 
		editorial: {
		 	presence: true,
		 	length: { maximum: 2000, minimum: 0 }
		}
	}
});	





Haul.CollectionProductListAdapter = Haul.ApplicationAdapter.extend({
	
	host: Haul.STORE_SERVER_HOST,  
    findMany: function(store, type, ids, record) {  
		var url = this.host + "/stores/" + record.get('id') + "/products"; 
		return this.ajax(url, 'GET');
	},

	
	findQuery: function(store, type, query) { 
        var url = this.host + "/stores/" + query.collection_id + "/products";
        return this.ajax(url, 'GET');
    },

    updateRecord: function(store, type, record) {

		var data = {
			product_ids: record.get('product_ids'),
			user_id: this.get('currentUserId')
		}

		var collection_id = record.get('collection_id');
		var url = this.host + "/stores/" + collection_id + "/products";
		return this.ajax(url, "PUT", { data: data }); 
	},

    createRecord: function(store, type, record) { 
		var data = {
			product_ids: record.get('product_ids'),
			user_id: this.get('currentUserId')
		}

		var collection_id = record.get('collection_id');
		var url = this.host + "/stores/" + collection_id + "/products";
		return this.ajax(url, "PUT", { data: data }); 
	},
});
 

Haul.CollectionProductListSerializer =  DS.RESTSerializer.extend({ 


	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data == "ok" ){
			return;
		}
	
	},

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
				collection_id: result.store_id,

				//collection: result.store_id,	
				product: result.product_id,
				image: result.product_image_id,
			}
		}); 

		var payload = {'collection-product-list': data};  
		return this._super(store, primaryType, payload);
	}
});


