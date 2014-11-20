Haul.ProductComment = DS.Model.extend(Ember.Validations.Mixin, {
	
	comment: DS.attr('string'),

	product_id: DS.attr('string'),
	product: DS.belongsTo('product'),

	user_id: DS.attr('string'),
	user: DS.belongsTo('user'),
	
	context_id: DS.attr('string'),
	context_type: DS.attr('string'),

	created_at: DS.attr('string'),
	marker_id: DS.attr('string'),
	
	validations: { 
		comment: {
		 	presence: true,
		 	length: { minimum: 2, maximum: 2000 }
		}
	}
});


Haul.ProductCommentAdapter = Haul.ApplicationAdapter.extend({

	host: Haul.COMMENT_SERVER_HOST, 

	type_map: {
		'markets': 'stores',
		'stores': 'stores',
		'products': 'products',
		'users': 'users'
	},

	findQuery: function(store, type, query) {
		var contextType = this.type_map[Ember.String.pluralize(query.contextType)];
		var url = this.host + "/" + contextType + "/" + query.contextId + "/products/" + query.itemId + "/comments"
		return this.ajax(url, 'GET');
	},

	createRecord: function(store, type, record) {
		var itemId = record.get('product_id');
		var contextType = this.type_map[record.get('type')];
		var contextId = record.get('id');
		var data = { 'comment':record.get('comment'), 'user_id': record.get('user_id') };

		var url = this.host + '/'+ contextType + '/' + contextId +'/products/'+ itemId + '/comments';
		return this.ajax(url, "POST", {data: data}); 
	},

	deleteRecord: function(store, type, record) {
		var itemId = record.get('product_id');
		var contextType = this.type_map[record.get('context_type')];
		var contextId = record.get('context_id'); 
		var commentId = record.get('id');
		var data = { 'user_id': record.get('user_id') };

		var url = this.host + '/'+ contextType + '/' + contextId +'/products/'+ itemId + '/comments/' + commentId;
		return this.ajax(url, "DELETE", {data: data}); 
	}	

});

Haul.ProductCommentSerializer =  DS.RESTSerializer.extend({
	
	extractSingle: function(store, type, payload, recordId, requestType) {
		
		if( payload.data == "ok" ){
			return;
		} 

	},

	extractArray: function(store, primaryType, payload) {

		if( payload.data == "ok" ){
			return;
		}
		
		var data = payload.data.map(function(record){
			return {
				id: record.comment_id,	
				comment: record.comment,
				created_at: record.created_at,
				marker_id: record.marker_id,
				product_id: record.product_id,
				product: record.product_id,
				user_id: record.user_id,
				user: record.user_id,
				context_id: record.context.id,
				context_type: record.context.type + 's',
			}
		}); 
		var payload = {'product-comment': data};  
		return this._super(store, primaryType, payload);
	}
});







/**
 COMMENT COUNT MODEL
**/

Haul.ProductCommentCount = DS.Model.extend({
	total: DS.attr('string'),
	product: DS.belongsTo('product')
});

Haul.ProductCommentCountAdapter = Haul.ApplicationAdapter.extend({

	host: Haul.COMMENT_SERVER_HOST,

	type_map: {
		'markets': 'stores',
		'stores': 'stores',
		'products': 'products',
		'users': 'users'
	},

	makeKey: function(id) {
		var id = String(id);
		var s = id.split(':');
		return {
			contextType : s[0],
			contextId : s[1],
			itemId : s[3]
		};
	},

	find: function(store, type, id) {
		var key = this.makeKey(id);
		var contextType = this.type_map[key.contextType];
		var url = this.host + '/' + contextType +'/' + key.contextId + '/products/'+ key.itemId + '/comments/total'
		return this.ajax(url, 'GET');
	}
});



Haul.ProductCommentCountSerializer =  DS.RESTSerializer.extend({

	extractSingle: function(store, type, payload, recordId, requestType) {

		if( payload.data == "ok" ){
			return;
		} 

		var data = { 
			id: payload.data.id,
			total: payload.data.total,	
		};

		var payload ={'product-comment-count': data}; 
		return this._super(store, type, payload);
	}
});