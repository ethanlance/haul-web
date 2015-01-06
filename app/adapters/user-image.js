import ApplicationAdapter from './application'; 

var UserImageAdapter = ApplicationAdapter.extend({
	
	host: Haul.Server.IMAGE_SERVER_HOST,
    
	deleteRecord: function(store, type, record) {
		var id = record.get('id');
		var user_id = this.get('currentUser').id;
		var url = this.host + '/users/' + user_id + '/images/' + id;
		return this.ajax(url, "DELETE");
	}, 

    //FIND IMAGES FOR A USERID
	findQuery: function(store, type, query) { 
		var url = this.host + '/users/' + query.user_id + '/images'; 
		return this.ajax(url, 'GET');
	}
});
export default UserImageAdapter;
