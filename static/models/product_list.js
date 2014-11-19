

//Models
Haul.ProductList = DS.Model.extend(Ember.Validations.Mixin, {
	
	name: DS.attr( 'string' ),
	description: DS.attr( 'string' ),
	price: DS.attr( 'string' ),
	quantity: DS.attr( 'string' ),
	image_ids: DS.attr( 'string' ),
	user_id: DS.attr( 'string' ),

	image: DS.belongsTo('image',{async:true}), 
	user: DS.belongsTo('user'),
	
	//comments: DS.hasMany('comment',{async:true}),

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

Haul.ProductListAdapter = Haul.ApplicationAdapter.extend({
	
	host: Haul.PRODUCT_SERVER_HOST,
 
	findQuery: function(store, type, query) {
        var url = this.host + "/users/" + query.user_id + "/products";
        return this.ajax(url, 'GET');
    },

});




Haul.ProductListSerializer =  DS.RESTSerializer.extend({
	
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
				user_id: product.user_id,
			}
		}); 
		var payload = {'product-list': data}; 
		return this._super(store, primaryType, payload);
	}
});





