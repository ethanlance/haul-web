import ApplicationAdapter from './application'; 
import config from '../config/environment';
var Haul = config.APP;

export default ApplicationAdapter.extend({
	
	host: Haul.Server.POST_SERVER_HOST,  
	
	findQuery: function(store, type, query) {
        var url = this.host + "/users/" + query.user_id + "/posts";

console.log("QUERY", query);

        
        var queryList = [];
        if( query.next ) {
            queryList.push("next=" + query.next);
        }
        if( query.limit ) {
            queryList.push("limit=" + query.limit);
        }
        if( query.previous ) {
            queryList.push("previous=" + query.previous);
        }
//console.log("LIST", queryList)
        if(!Ember.isEmpty(queryList)) {
            url = url + "?" + queryList.join("&");

        }
console.log("POST_LIST GET URL", url);

        return this.ajax(url, 'GET');
    }

});