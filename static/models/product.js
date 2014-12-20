
//Models
Haul.Product = DS.Model.extend(Ember.Validations.Mixin, {
	
	name: DS.attr( 'string' ),
	description: DS.attr( 'string' ),
	price: DS.attr( 'string' ),
	quantity: DS.attr( 'string' ),
	user_id: DS.attr( 'string' ),

	likeCount: DS.belongsTo('like-count'),

	user: DS.belongsTo('user'), 
	images: DS.hasMany('image', {async:true}),
	image: DS.belongsTo('image'),	

	getCollections: DS.belongsTo('product-collection-list', {async:true}),
	getLikes: DS.belongsTo('product-liked-by-list', {async:true}),

	validations: { 
		name: {
		 	presence: true,
		 	length: { minimum: 2 }
		},
		description: {
		 	presence: true,
		 	length: { maximum: 2000 }
		},
		quantity: {
			numericality: true,
		 	presence: true,
		 	length: { maximum: 100 }
		},
		price: {
			numericality: true,
		 	presence: true
		}
	}
});

Haul.ProductAdapter = Haul.ApplicationAdapter.extend({
	
	host: Haul.PRODUCT_SERVER_HOST,
 
	findQuery: function(store, type, query) {
        var url = this.host + "/users/" + query.user_id + "/products";
        return this.ajax(url, 'GET');
    },

	findMany: function(store, type, ids) { 
		if( ids.length < 2 ){
			var url = this.host + "/products/" + ids[0];
			return this.ajax(url, 'GET');
		}else{	
			var url = this.host + "/products";
			return this.ajax(url, 'GET', { data: { product_ids: ids } });
		}
	}, 

	deleteRecord: function(store, type, record) {	
      	var id = record.get('id');

		var user_id = this.get('currentUserId');
      	var url = this.host + "/users/" + user_id + '/products/' + id; 
		return this.ajax(url, "DELETE");
	},

	updateRecord: function(store, type, record) {
		var data = {
			name: record.get('name'),
			description: record.get('description'),
			price: record.get('price'),
			quantity: record.get('quantity'),
			image_ids: record.get('image_ids').map(function(image){ return image})
		}

        var user_id = this.get('currentUserId');
        var product_id = record.get('id');
		var url = this.host + "/users/" + user_id + "/products/" + product_id;

		return this.ajax(url, "PUT", { data: data });
	},

	createRecord: function(store, type, record) {

		var data = {
			name: record.get('name'),
			description: record.get('description'),
			price: record.get('price'),
			quantity: record.get('quantity'),
			image_ids: record.get('image_ids').map(function(image){ return image})
		}
		
		var user_id = this.get('currentUserId');
		var url = this.host + "/users/" + user_id + "/products";
		
		return this.ajax(url, "POST", { data: data }); 
	}
});




Haul.ProductSerializer =  DS.RESTSerializer.extend({

	extractFindMany: function(store, type, payload){
		if( payload.data.type === "product" ){
			return [this.extractSingle(store, type, payload)];
		}else{
			return this.extractArray(store, type, payload);
		}
    },

	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data == "ok" ){
			return;
		}

		var data = {
			id: payload.data.product_id,	
			name: payload.data.name,
			description: payload.data.description,
			price: payload.data.price,
			quantity: payload.data.quantity,
			images: payload.data.image_ids,
			image: payload.data.image_ids[0],
			user: payload.data.user_id,
			user_id: payload.data.user_id,
			
			likeCount: payload.data.product_id,

			getCollections: payload.data.product_id,
			getLikes: payload.data.product_id,
		};

		var payload ={'product': data}; 
		return this._super(store, primaryType, payload, recordId, requestType);
	},


	extractArray: function(store, primaryType, payload) {

		if( payload.data == "ok" ){ 
			return;
		}
 		
 		var data = [];
		data = payload.data.map(function(result){ 
			return {
				id: result.product_id,	
				name: result.name,
				description: result.description,
				price: result.price,
				quantity: result.quantity,
				images: result.image_ids,
				image: result.image_ids[0],
				user: result.user_id,
				user_id: result.user_id,
				
				likeCount: payload.data.product_id,

				getCollections: payload.data.product_id,
				getLikes: payload.data.product_id,

			}
		});

		var payload = {'product': data}; 
		return this._super(store, primaryType, payload);
	},
});





