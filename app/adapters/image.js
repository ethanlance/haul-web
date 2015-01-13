import ApplicationAdapter from './application'; 

import config from '../config/environment';
var Haul = config.APP;

var ImageAdapter = ApplicationAdapter.extend({
	
	host: Haul.Server.IMAGE_SERVER_HOST,
    
	deleteRecord: function(store, type, record) {
		var id = record.get('id');
		var user_id = this.get('currentUser').id;
		var url = this.host + '/users/' + user_id + '/images/' + id;
		return this.ajax(url, "DELETE");
	},
  
	findMany: function(store, type, ids) { 
		var url;
		if( ids.length < 2 ){
			url = this.host + "/images/" + ids[0];
			return this.ajax(url, 'GET');
		}else{	
			url = this.host + "/images";
			return this.ajax(url, 'GET', { data: { image_ids: ids } });
		}
	},

    //FIND IMAGES FOR A USERID
	findQuery: function(store, type, query) { 
		var url = this.host + '/users/' + query + '/images';
		return this.ajax(url, 'GET');
	}
});
export default ImageAdapter;


