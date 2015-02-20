import DS from 'ember-data';
export default DS.RESTSerializer.extend({


	//Need this for Delete, Update record
	extractSingle: function(store, primaryType, payload, recordId, requestType) {

		if( payload.data === "ok" ){
			return;
		}
		
		var id = payload.data.user_id + "-" + payload.data.post_id; 
		var data = {
			id: id,	
			user: payload.data.user_id,
			updated_at: payload.data.updated_at,
			body: payload.data.body,
			subject: payload.data.subject,
            image: payload.data.image_id
		};

		payload = {'repost-someone-else': data};  
		return this._super(store, primaryType, payload, recordId, requestType);
	},

	
});