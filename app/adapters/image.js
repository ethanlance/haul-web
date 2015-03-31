import ApplicationAdapter from './application'; 

export default ApplicationAdapter.extend({
	
	host: function(){
		return this.ENV.Server.IMAGE_SERVER_HOST;	
	}.property(), 
	    
	deleteRecord: function(store, type, record) {
		var id = record.get('id');
		var user_id = this.get('currentUser').id;
		var url = this.get('host') + '/images/' + id + "?user_id=" + user_id;
		return this.ajax(url, "DELETE");
	},
  
	findMany: function(store, type, ids) { 
		var url;
		if( ids.length < 2 ){
			url = this.get('host') + "/images/" + ids[0];
			return this.ajax(url, 'GET');
		}else{	
			url = this.get('host') + "/images";
			return this.ajax(url, 'GET', { data: { image_ids: ids } });
		}
	},

    //FIND IMAGES FOR A USERID
	findQuery: function(store, type, query) { 
		var url = this.get('host') + '/users/' + query + '/images';
		return this.ajax(url, 'GET');
	}
});