import ApplicationAdapter from './application'; 

import config from '../config/environment';
var Haul = config.APP;
console.log("BOOMSHIT")
export default ApplicationAdapter.extend({
	
	host: Haul.Server.SEARCH_SERVER_HOST,

	findAll: function() {
		console.log("FUCK");
	},


findMany: function() {
		console.log("FUCK");
	},
 
	findQuery: function(store, type, query) {
		console.log("HOLLY SHITE")
        var url = this.host + "/search/tags/" + query.q + "/products";
        return this.ajax(url, 'GET');
    },
});