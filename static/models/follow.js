Haul.Follow = DS.Model.extend({
	ref_type: DS.attr('string'),
	ref_id: DS.attr('string'),
	user_id: DS.attr('string'),
});

Haul.FollowAdapter = Haul.ApplicationAdapter.extend({

	host: Haul.FOLLOW_SERVER_HOST,

	find: function(store, type, id) {
		var id = String(id);
		var key = id.split('-');
		var ref_id = key[0];
		var ref_type = key[1];
		var user_id = this.get('currentUserId');

		var url = this.host + "/users/" + user_id + "/follows/" + ref_type + "/" + ref_id;		
		return this.ajax(url, 'GET');
	},

	createRecord: function(store, type, record) {
		var ref_type = record.get('ref_type');
		var ref_id = record.get('ref_id');
		var user_id = record.get('user_id');

		var url = this.host + "/users/" + user_id + "/follows/" + ref_type + "/" + ref_id;		
		return this.ajax(url, "PUT"); 
	},

	deleteRecord: function(store, type, record) {
		var ref_type = record.get('ref_type');
		var ref_id = record.get('ref_id');
		var user_id = record.get('user_id');

		var url = this.host + "/users/" + user_id + "/follows/" + ref_type + "/" + ref_id;		
		return this.ajax(url, "DELETE"); 
	}	

});

Haul.FollowSerializer =  DS.RESTSerializer.extend({
	extractSingle: function(store, type, payload, recordId, requestType) {
		
		if( payload.data == "ok"){
			return;
		} 

		var id = payload.data.user_id +payload.data.object.id;
		var data = {
			id: id,
			ref_type: payload.data.object.type + "s",
			ref_id: payload.data.object.id,
			user_id: payload.data.user_id
		}

		var payload ={'follow': data}; 
		return this._super(store, type, payload);
	}
});


/*
	UserIsFollowingCount:
	How many ITEMS (users & collections combined) is this user following
*/

Haul.UserIsFollowingCount = DS.Model.extend({
	total: DS.attr('string'),
	user: DS.belongsTo('user')
});

Haul.UserIsFollowingCountAdapter = Haul.ApplicationAdapter.extend({

	host: Haul.FOLLOW_SERVER_HOST,

	find: function(store, type, id) { 
		var url = this.host + "/users/" + id + "/follows/total";  
		return this.ajax(url, 'GET');
	}
});
 
Haul.UserIsFollowingCountSerializer =  DS.RESTSerializer.extend({

	extractSingle: function(store, type, payload, recordId, requestType) {

		if( payload.data == "ok"){
			return;
		} 

		var data = { 
			id: payload.data.object.id,
			total: payload.data.total,	
		};

		var payload ={'user-is-following-count': data}; 
		return this._super(store, type, payload);
	}
});


/*
	UserFollowedByUserCount:
	How many user's follow this user
*/

Haul.UserIsFollowedByCount = DS.Model.extend({
	total: DS.attr('string'),
	product: DS.belongsTo('product')
});

Haul.UserIsFollowedByCountAdapter = Haul.ApplicationAdapter.extend({

	host: Haul.FOLLOW_SERVER_HOST,

	find: function(store, type, id) { 
		var url = this.host + "/follows/users/" + id + "/total";  
		return this.ajax(url, 'GET');
	}
});
 
Haul.UserIsFollowedByCountSerializer =  DS.RESTSerializer.extend({

	extractSingle: function(store, type, payload, recordId, requestType) {

		if( payload.data == "ok" ){
			return;
		} 

		var data = { 
			id: payload.data.object.id,
			total: payload.data.total,	
		};

		var payload ={'user-is-followed-by-count': data}; 
		return this._super(store, type, payload);
	}
});



/*
	FollowCollectionCount:
	How many user's follow this collection
*/

Haul.CollectionIsFollowedByCount = DS.Model.extend({
	total: DS.attr('string'),
	product: DS.belongsTo('product')
});

Haul.CollectionIsFollowedByCountAdapter = Haul.ApplicationAdapter.extend({

	host: Haul.FOLLOW_SERVER_HOST,

	find: function(store, type, id) { 
		var url = this.host + "/follows/stores/" + id + "/total";  
		return this.ajax(url, 'GET');
	}
});
 
Haul.CollectionIsFollowedByCountSerializer =  DS.RESTSerializer.extend({

	extractSingle: function(store, type, payload, recordId, requestType) {

		if( payload.data == "ok"){
			return;
		} 

		var data = { 
			id: payload.data.object.id,
			total: payload.data.total,	
		};

		var payload ={'collection-is-followed-by-count': data}; 
		return this._super(store, type, payload);
	}
});




/**
	List of users who follow a user.
**/ 
Haul.UserFollowersList = DS.Model.extend({
	user: DS.belongsTo('user'), 
	followers: DS.hasMany('user', {async:true}),
});

Haul.UserFollowersListAdapter = Haul.ApplicationAdapter.extend({

	host: Haul.FOLLOW_SERVER_HOST,

	find: function(store, type, id) {
		var url = this.host + "/follows/users/" + id;
		return this.ajax(url, 'GET');
	}
});

Haul.UserFollowersListSerializer =  DS.RESTSerializer.extend({

	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data == "ok" ){
			return;
		}

		if( Ember.isEmpty(payload.data)){ 
			var payload = {'user-followers-list': {id:1} }; 
			return this._super(store, primaryType, payload);
		}

		
		var user_id = null;
		var follower_ids = [];

		payload.data.map(function(result){ 
			user_id =  result.object.id
			follower_ids.push( result.user_id );
			return;
		}); 

		var data = {
			id: user_id,	
			user: user_id,
			followers: follower_ids
		}
	
		var payload ={'user-followers-list': data}; 
		return this._super(store, primaryType, payload);
	}
});








/**
	List of things a user follows
**/ 
Haul.UserFollowsList = DS.Model.extend({
	user: DS.belongsTo('user'), 
	follows_user: DS.belongsTo('user', {async:true}),
	follows_collection: DS.belongsTo('collection', {async:true}),
});

Haul.UserFollowsListAdapter = Haul.ApplicationAdapter.extend({

	host: Haul.FOLLOW_SERVER_HOST,

	findQuery: function(store, type, query) {
        var url = this.host + "/users/" + query.id + "/follows";
        return this.ajax(url, 'GET');
    },

	// find: function(store, type, id) {
	// 	var url = this.host + "/users/" + id + "/follows";
	// 	return this.ajax(url, 'GET');
	// }
});

Haul.UserFollowsListSerializer =  DS.RESTSerializer.extend({

	extractArray: function(store, primaryType, payload) {

		if( payload.data == "ok" ){ 
			return;
		}

 		var data = [];
		data = payload.data.map(function(result){ 
				
			
			var user_id = false;
			var collection_id = false;

			if( result.object.type === 'user'){
				user_id = result.object.id;
				var id =  result.user_id + ":" + user_id;
			}
			if( result.object.type === 'store'){
				collection_id = result.object.id;
				var id =  result.user_id + ":" + collection_id;
			}

			var arr = { id: id, user_id: id } 
			if( collection_id )
				arr['follows_collection'] = collection_id;
			if( user_id )
				arr['follows_user'] = user_id;

			return arr;
		});

		var payload = {'user-follows-list': data}; 
		return this._super(store, primaryType, payload);
	},

	// extractSingle: function(store, primaryType, payload, recordId, requestType) {

	// 	if( payload.data == "ok" ){
	// 		return false;
	// 	} 


	// 	if( Ember.isEmpty(payload.data)){ 
	// 		var payload = {'user-follows-list': {id:1} }; 
	// 		return this._super(store, primaryType, payload);
	// 	}
	
	// 	var user_id = null;
	// 	var follows_user_ids = [];
	// 	var follows_collection_ids = [];

	// 	payload.data.map(function(result){ 
	// 		user_id =  result.user_id
	// 		if( result.object.type === 'user')
	// 			follows_user_ids.push( result.object.id );
	// 		if( result.object.type === 'store')
	// 			follows_collection_ids.push( result.object.id );
	// 		return;
	// 	}); 

	// 	var data = {
	// 		id: user_id,	
	// 		user: user_id,
	// 		follows_users: follows_user_ids,
	// 		follows_collections: follows_collection_ids
	// 	}
	
	// 	var payload ={'user-follows-list': data}; 
	// 	return this._super(store, primaryType, payload);
	// }
});