import ApplicationAdapter from './application'; 

export default ApplicationAdapter.extend({
	host: function(){
		return this.ENV.Server.COMMENT_SERVER_HOST;	
	}.property(), 
	
	find: function(store, type, key) {
		var arg = key.split('-');
		var id = arg[0];
		var type = arg[1];

		if( type === undefined ) {
			type = "posts";
		}

		var url = this.get('host') + '/comments/'+ type +'/' + id + '/total';
		return this.ajax(url, 'GET');
	}
});
