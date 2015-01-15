import ApplicationRoute from './../application';

export default ApplicationRoute.extend({
	model: function() { 
		return this.modelFor('seller');
	}
});