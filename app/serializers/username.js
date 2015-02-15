import DS from "ember-data";

export default DS.RESTSerializer.extend({

	extractSingle: function(store, type, payload, recordId, requestType) {
		var data =  {
			id: recordId,
			username: payload.data.username,
		}; 
		
		payload = {'username': data}; 
		return this._super(store, type, payload, recordId, requestType);
	}

});