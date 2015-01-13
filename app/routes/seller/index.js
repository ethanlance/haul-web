import ApplicationRoute from './../application';

import config from '../../config/environment';
var Haul = config.APP;

export default ApplicationRoute.extend({
	model: function() { 
		console.log("HAUL", Haul)
		return this.modelFor('seller');
	},
 	setupController: function(controller, model) {
 		controller.set('user', this.modelFor('seller'));
 		controller.set('content', model);  
 	}
});