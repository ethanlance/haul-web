import DS from 'ember-data';

var ProductCommentSerializer =  DS.RESTSerializer.extend({
	
	extractSingle: function(store, type, payload, recordId, requestType) {
		
		if( payload.data === "ok" ){
			return;
		} 

		return this._super(store, type, payload, recordId, requestType);
	},

	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok" ){
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
			};
		}); 
		payload = {'product-comment': data};  
		return this._super(store, primaryType, payload);
	}
});
export default ProductCommentSerializer;