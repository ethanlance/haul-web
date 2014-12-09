//Get all the stores (collections) that this product is in.

//Models
Haul.ProductCollectionList = DS.Model.extend(Ember.Validations.Mixin, {
	collections: DS.hasMany('collection', {async:true}),
 	product: DS.belongsTo('product'),
});	

Haul.ProductCollectionListAdapter = Haul.ApplicationAdapter.extend({
	
	host: Haul.STORE_SERVER_HOST, 
	
	find: function(store, type, id) {
		var url = this.host + "/products/" + id + "/stores"; 
        return this.ajax(url, 'GET');
    },
});



Haul.ProductCollectionListSerializer =  DS.RESTSerializer.extend({ 

	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data == "ok" ){
			return;
		}
		
		var product_id = null;
		var collection_ids = [];

		data = payload.data.map(function(result){ 
			product_id =  result.product_id;
			collection_ids.push( result.store_id );
			return 
		}); 

		var data = {
			id: product_id,	
			product: product_id,
			collections: collection_ids
		} 

		var payload = {'product-collection-list': data};  
		return this._super(store, primaryType, payload, recordId, requestType);
	}
});