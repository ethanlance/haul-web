import DS from 'ember-data';
export default DS.RESTSerializer.extend({

	extractArray: function(store, primaryType, payload) {

		if( payload.data === "ok"){
			return;
		} 

		var user_id = null;
		var post_id = null;

		var data = null;
		var datas = payload.data.map(function(result){
			
			var id = result.object.id;
			data = {
				id: id,	
				post:id,		
				user:result.user_id,		
			}
			return data;
		});

		payload = {'user-likes-list': datas}; 
		return this._super(store, primaryType, payload);
	}
});