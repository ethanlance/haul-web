
//Models
Haul.Product = DS.Model.extend(Ember.Validations.Mixin, {
	
	name: DS.attr( 'string' ),
	description: DS.attr( 'string' ),
	price: DS.attr( 'string' ),
	quantity: DS.attr( 'string' ),
	image_ids: DS.attr( 'string' ),

	image: DS.belongsTo('image',{async:true}),
	images: DS.hasMany('image',{async:true}),
	user: DS.belongsTo('user'),
	
	comments: DS.hasMany('comment',{async:true}),

	validations: { 
		name: {
		 	presence: true,
		 	length: { minimum: 2 }
		},
		description: {
		 	presence: true,
		 	length: { maximum: 500 }
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

	deleteRecord: function(store, type, record) {	
      	var id = record.get('id');
		var user_id = Ember.$.cookie('auth_user').id;
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

        var user_id = Ember.$.cookie('auth_user').id;
        var product_id = record.get('id');
		var url = this.host + "/users/" + user_id + "/products/" + product_id;

		return this.ajax(url, "PUT", { data: data });
	},

	createRecord: function(store, type, record) {
 
		$.ajaxSetup({
			headers: {
			  'Authorization': 'Bearer ' + Ember.$.cookie('access_token')
			}
		});

		var data = {
			name: record.get('name'),
			description: record.get('description'),
			price: record.get('price'),
			quantity: record.get('quantity'),
			image_ids: record.get('image_ids').map(function(image){ return image})
		}
		
		var user_id = Ember.$.cookie('auth_user').id;
		var url = this.host + "/users/" + user_id + "/products";
		
		return this.ajax(url, "POST", { data: data }); 
	}
});




Haul.ProductSerializer =  DS.RESTSerializer.extend({
	
	extractArray: function(store, primaryType, payload) {

		if( payload.data == "ok" ){
			return;
		}
		
		var data = payload.data.map(function(product){
			return {
				id: product.product_id,	
				name: product.name,
				description: product.description,
				price: product.price,
				quantity: product.quantity,
				image: product.image_id,
				user: product.user_id,
			}
		}); 
		var payload = {'products': data}; 
		return this._super(store, primaryType, payload);
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
			user: payload.data.user_id
		};


		var payload ={'product': data}; 
		return this._super(store, primaryType, payload);
	},
});





