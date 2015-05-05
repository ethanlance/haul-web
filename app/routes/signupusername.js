import Ember from 'ember';
import AnonMixin from '../mixins/anon';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AnonMixin, AuthenticatedRouteMixin, {
	
	model: function() {
		return this.store.createRecord('username');
	},
	renderTemplate: function() {
		this.render('layouts/header_anon', {
			into: 'application',
			outlet: 'header'
		});
		this.render('signupusername');
	}
});
