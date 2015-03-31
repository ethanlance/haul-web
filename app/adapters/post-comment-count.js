import ApplicationAdapter from './application'; 

export default ApplicationAdapter.extend({
	host: function(){
		return this.ENV.Server.COMMENT_SERVER_HOST;	
	}.property(), 
	
	find: function(store, type, id) {
		var url = this.get('host') + '/posts/' + id + '/comments/total';
		return this.ajax(url, 'GET');
	}
});
