import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

	host: function(){
		return this.ENV.Server.FOLLOW_SERVER_HOST;	
	}.property(), 

	find: function(store, type, id) {
		var url = this.get('host') + "/users/" + id + "/follows/total";  
		return this.ajax(url, 'GET');
	}
});