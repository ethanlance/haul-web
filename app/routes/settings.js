import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import ResetScrollMixin from '../mixins/resetscroll';
export default Ember.Route.extend(AuthenticatedRouteMixin, ResetScrollMixin,{

	metaTitle: function() {
		return "Your Profile Settings";
	}.property(),	

	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('settings');
	},
});