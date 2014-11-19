
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
	

	//GET ONE IMAGE:
	first_image: function() { 
		return this.get('images').then(function(images){ 
			return images.get('firstObject');
		});
	}.property(),

	// /comments: DS.hasMany('comment', {async:true}),
	// comments: function() {
	// 	var store = this.store;
	// 	var product_id = this.get('id');

	// 	store.find('comment-list', {product_id: product_id});

	// 	return store.filter('comment-list', function(comment){
	// 		if( comment.get('product_id') == product_id ) {
	// 			return comment;
	// 		}
	// 	});
		
	// }.property()

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
			user: payload.data.user_id,
			user_id: payload.data.user_id,
			
			likeCount: payload.data.product_id
		};


		var payload ={'product': data}; 
		return this._super(store, primaryType, payload, recordId, requestType);
	},
});





