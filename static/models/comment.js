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

	findQuery: function(store, type, query) {
		var url = this.host + "/" + query.contextType + "/" + query.contextId + "/products/" + query.itemId + "/comments"
		return this.ajax(url, 'GET');
	},

	createRecord: function(store, type, record) {
		var product_id = record.get('product_id');
		var type = record.get('type');
		var id = record.get('id');
		var user_id = record.get('user_id');
		var comment = record.get('comment');
		var data = { 'comment':comment, 'user_id': user_id };
		var url = this.host + '/'+ type + '/' + id +'/products/'+ product_id + '/comments';
		return this.ajax(url, "POST", {data: data}); 
	},

	deleteRecord: function(store, type, record) {
		var product_id = record.get('product_id');
		var type = record.get('context_type');
		var id = record.get('context_id');
		var user_id = record.get('user_id');
		var comment_id = record.get('id');
		var data = { 'user_id': user_id };

		var url = this.host + '/'+ type + '/' + id +'/products/'+ product_id + '/comments/' + comment_id;
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
		console.log("WHAT? ", payload)
		return this._super(store, primaryType, payload);
	}
});