import Ember from 'ember';
import ApplicationRoute from './../application';

export default ApplicationRoute.extend({
	model: function() { 
		return this.modelFor('seller');
	},
 	setupController: function(controller, model) {
 		controller.set('user', this.modelFor('seller'));
 		controller.set('content', model);  
 	}
});