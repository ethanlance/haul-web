import ApplicationAdapter from './application'; 

import config from '../config/environment';
var Haul = config.APP;

export default ApplicationAdapter.extend({
	
	host: Haul.Server.POST_SERVER_HOST, 

	createRecord: function(store, type, record) {

		var data;
		var user_id = record.get('user_id');
		var repost_user_id = record.get('repost_user_id')
		var repost_id = record.get('repost_id')
 
		data = {
            user_id: user_id,
            subject: record.get('subject'),
            body: record.get('body'),
            image_id: record.get('image_id')
       	}

		var url = this.host + "/users/" + repost_user_id + "/posts/" + repost_id;
		return this.ajax(url, "POST", { data: data }); 
	}
});