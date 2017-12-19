import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

	host: function(){
		return this.ENV.Server.POST_SERVER_HOST;	
	}.property(), 

	find: function(store, type, id) {
		var url = this.get('host') + "/users/" + id + "/posts/total";  
		return this.ajax(url, 'GET');
	}
});