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
		
		if( payload.data == "ok" ){
			return;
		} 

		var id = payload.data.user_id +payload.data.object.id;
		var data = {
			id: id,
			ref_type: payload.data.object.type,
			ref_id: payload.data.object.id,
			user_id: payload.data.user_id
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

		if( payload.data == "ok" ){
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

		if( payload.data == "ok" || Ember.isEmpty(payload.data) ){
			return;
		} 

		var user_id = null;
		var product_ids = []; 

		payload.data.map(function(result){ 
			user_id =  result.user_id
			product_ids.push( result.object.id );
			return;
		}); 

		var data = {
			id: user_id,	
			user: user_id,
			products: product_ids, 
		}
	
		
		console.log("PAYLOAD", payload);	
		var payload ={'user-likes-list': data}; 
		return this._super(store, primaryType, payload);
	}
});





/**
 How many things a user has liked.
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

		if( payload.data == "ok" ){
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