/**
 	Set whether a user likes/unlikes a product.
*/
Haul.Like = DS.Model.extend({
	ref_type: DS.attr('string'),
	ref_id: DS.attr('string'),
	user_id: DS.attr('string'),
});

Haul.LikeAdapter = Haul.ApplicationAdapter.extend({

	host: Haul.WANT_SERVER_HOST,

	find: function(store, type, id) {
		var ref_type = 'products';
		var ref_id = id;
		var user_id = this.get('currentUserId');

		var url = this.host + "/users/" + user_id + "/likes/" + ref_type + "/" + ref_id;		
		return this.ajax(url, 'GET');
	},

	createRecord: function(store, type, record) {
		var ref_type = 'products';
		var ref_id = record.get('ref_id');
		var user_id = record.get('user_id');

		var url = this.host + "/users/" + user_id + "/likes/" + ref_type + "/" + ref_id;		
		return this.ajax(url, "PUT"); 
	},

	deleteRecord: function(store, type, record) {
		var ref_type = 'products';
		var ref_id = record.get('ref_id');
		var user_id = record.get('user_id');

		var url = this.host + "/users/" + user_id + "/likes/" + ref_type + "/" + ref_id;		
		return this.ajax(url, "DELETE"); 
	}	

});

Haul.LikeSerializer =  DS.RESTSerializer.extend({
	extractSingle: function(store, type, payload, recordId, requestType) {
		
		if( payload.data === "ok" ){
			return;
		} 

		var id = String(payload.data.context_id);
		var key = id.split(':');
		user_id = key[1]

		var id = String(payload.data.id);
		var key = id.split(':');
		product_id = key[1]
		

		var id = user_id + ":" + product_id;
		var data = {
			id: id,
			ref_type: payload.data.type,
			ref_id: product_id,
			user_id: user_id
		}

		var payload ={'like': data}; 
		return this._super(store, type, payload);
	}
});






/**
 Total likes a product has.
 **/
Haul.LikeCount = DS.Model.extend({
	total: DS.attr('string'),
	product: DS.belongsTo('product')
});

Haul.LikeCountAdapter = Haul.ApplicationAdapter.extend({

	host: Haul.WANT_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/likes/products/" + id + "/total";  
		return this.ajax(url, 'GET');
	}
});

Haul.LikeCountSerializer =  DS.RESTSerializer.extend({

	extractSingle: function(store, type, payload, recordId, requestType) {

		if( payload.data === "ok" ){
			return;
		} 

		var data = { 
			id: payload.data.object.id,
			total: payload.data.total,	
		};

		var payload ={'like-count': data}; 
		return this._super(store, type, payload);
	}
});



/**
	List of users who like a product.
**/ 
Haul.ProductLikedByList = DS.Model.extend({
	product: DS.belongsTo('product'), 
	users: DS.hasMany('user', {async:true}) 
});

Haul.ProductLikedByListAdapter = Haul.ApplicationAdapter.extend({

	host: Haul.WANT_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/likes/products/" + id;
		return this.ajax(url, 'GET');
	}
});

Haul.ProductLikedByListSerializer =  DS.RESTSerializer.extend({

	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok"){
			return;
		} 

		var product_id = null;
		var user_ids = []; 
		var user_id = null;

		payload.data.map(function(result){ 

			var id = String(result.context_id);
			var key = id.split(':');
			product_id = key[1]

			var id = String(result.id);
			var key = id.split(':');
			user_id = key[1]
			user_ids.push(user_id)
			
		});  

		var id = product_id;
		var data = {
			id: id,
			users: user_ids,
			product_id: product_id,
		}

		var payload ={'product-liked-by-list': data}; 
		return this._super(store, primaryType, payload);
	}
});




/**
	List of products a user likes.
**/ 
Haul.UserLikesList = DS.Model.extend({
	user: DS.belongsTo('user'), 
	products: DS.hasMany('product', {async:true}) 
});

Haul.UserLikesListAdapter = Haul.ApplicationAdapter.extend({

	host: Haul.WANT_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/users/" + id + "/likes";
		return this.ajax(url, 'GET');
	}
});

Haul.UserLikesListSerializer =  DS.RESTSerializer.extend({

	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok"){
			return;
		} 

		if( Ember.isEmpty(payload.data)){ 
			var payload = {'user-likes-list': {id:1} }; 
			return this._super(store, primaryType, payload);
		}
		

		var product_id = null;
		var user_id = null;
		var product_ids = []; 

		payload.data.map(function(result){ 

			var id = String(result.context_id);
			var key = id.split(':');
			user_id = key[1]

			var id = String(result.id);
			var key = id.split(':');
			product_id = key[1]
			product_ids.push(product_id)
			
		});  
 
		var id = user_id + ":" + product_id;
		var data = {
			id: id,
			user: user_id,
			products: product_ids,
		}
		
		var payload ={'user-likes-list': data}; 
		return this._super(store, primaryType, payload);
	}
});





/**
  Total count of how many things a user has liked.
 **/
Haul.UserLikesCount = DS.Model.extend({
	total: DS.attr('string'),
	user: DS.belongsTo('user')
});

Haul.UserLikesCountAdapter = Haul.ApplicationAdapter.extend({

	host: Haul.WANT_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/users/" + id + "/likes/total";  
		return this.ajax(url, 'GET');
	}
});

Haul.UserLikesCountSerializer =  DS.RESTSerializer.extend({

	extractSingle: function(store, type, payload, recordId, requestType) {

		if( payload.data === "ok" ){
			return;
		} 

		var data = { 
			id: payload.data.object.id,
			total: payload.data.total,	
		};

		var payload ={'user-likes-count': data}; 
		return this._super(store, type, payload);
	}
});