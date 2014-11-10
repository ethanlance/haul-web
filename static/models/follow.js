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
		
		if( payload.data == "ok" ){
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
	How many ITEMS (users & markets combined) is this user following
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

		if( payload.data == "ok" ){
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
	FollowMarketCount:
	How many user's follow this market
*/

Haul.MarketIsFollowedByCount = DS.Model.extend({
	total: DS.attr('string'),
	product: DS.belongsTo('product')
});

Haul.MarketIsFollowedByCountAdapter = Haul.ApplicationAdapter.extend({

	host: Haul.WANT_SERVER_HOST,

	find: function(store, type, id) { 
		var url = this.host + "/follows/stores/" + id + "/total";  
		return this.ajax(url, 'GET');
	}
});
 
Haul.MarketIsFollowedByCountSerializer =  DS.RESTSerializer.extend({

	extractSingle: function(store, type, payload, recordId, requestType) {

		if( payload.data == "ok" ){
			return;
		} 

		var data = { 
			id: payload.data.object.id,
			total: payload.data.total,	
		};

		var payload ={'market-is-followed-by': data}; 
		return this._super(store, type, payload);
	}
});