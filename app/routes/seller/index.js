import ApplicationRoute from './../application';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default ApplicationRoute.extend({
	model: function() { 
		return this.modelFor('seller');
	}
});