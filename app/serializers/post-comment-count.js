import DS from 'ember-data';

export default  DS.RESTSerializer.extend({

	extractSingle: function(store, type, payload, recordId, requestType) {

		if( payload.data === "ok" ){
			return;
		} 

		//id looks like "users:38298610542051328:products:38306086381420544"
		//we need :users_id-:product_id
		var id = String(payload.data.id);
		var s = id.split(':');
		id = s[0]+"-"+s[3];

		var data = { 
			id: payload.data.id,
			total: payload.data.total,	
		};

		payload ={'post-comment-count': data}; 
		return this._super(store, type, payload, recordId, requestType);
	}
});