

//Models
Haul.CollectionProduct = DS.Model.extend(Ember.Validations.Mixin, {
	editorial: DS.attr('string'),

	product: DS.belongsTo('product'),
	collection: DS.belongsTo('collection'),

	validations: { 
		editorial: {
		 	//presence: true,
		 	length: { maximum: 2000, minimum: 0 }
		},
		collection: {
		 	presence: true, 
		},
		product: {
		 	presence: true, 
		}
	}
});	

Haul.CollectionProductAdapter = Haul.ApplicationAdapter.extend({
	
	host: Haul.STORE_SERVER_HOST, 

	find: function(store, type, id){
		var id = String(id);
		var key = id.split('-');
		var collection_id = key[0];
		var product_id = key[1];
		var url = this.host + "/stores/" + collection_id + "/products/" + product_id;

        return this.ajax(url, 'GET');
	},

	findQuery: function(store, type, args) {
		var url = this.host + "/stores/" + args.collection_id + "/products/" + args.product_id;
        return this.ajax(url, 'GET');
    },

    deleteRecord: function(store, type, record ) {
    
    	record.rollback();

      	var data = {user_id:  this.get('currentUserId')}
		var collection_id = record.get('collection').get('id');
		var product_id = record.get('product').get('id');
		var url = this.host + "/stores/" + collection_id + "/products/" + product_id;

		//record.rollforward()?

		return this.ajax(url, "DELETE", {data: data} );
	},    
 
	updateRecord: function(store, type, record) {

		var data = {
			editorial: record.get('editorial'),
			user_id: this.get('currentUserId')
		}

		var collection_id = record.get('collection').get('id');
		var url = this.host + "/stores/" + collection_id + "/products/" + record.get('product').get('id');
		return this.ajax(url, "PUT", { data: data }); 
	},

	createRecord: function(store, type, record) {

		var data = {
			editorial: record.get('editorial'),
			user_id: this.get('currentUserId')
		}

		var collection_id = record.get('collection').get('id');
		var url = this.host + "/stores/" + collection_id + "/products/" + record.get('product').get('id');
		return this.ajax(url, "PUT", { data: data }); 
	}
});

Haul.CollectionProductSerializer =  DS.RESTSerializer.extend({


	//Need this for Delete, Update record
	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok" ){
			return;
		}

		var id = payload.data.store_id + payload.data.product_id; 
		var data = {
			id: id,	
			editorial: payload.data.editorial,
			product: payload.data.product_id,
			collection: payload.data.store_id
		} 

		var payload = {'collection-product': [data]};  
		return this._super(store, primaryType, payload);
	},

	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){
			return;
		} 
		
		var id = payload.data.store_id + payload.data.product_id; 
		var data = {
			id: id,	
			editorial: payload.data.editorial,
			product: payload.data.product_id,
			collection: payload.data.store_id
		} 

		var payload = {'collection-product': [data]};  
		return this._super(store, primaryType, payload);
	}
});


