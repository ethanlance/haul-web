import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AuthenticatedRouteMixin, {

	metaTitle: function() {
		return "Choose A Username";
	}.property(),	
	
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
