import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import ResetScrollMixin from '../mixins/resetscroll';
export default Ember.Route.extend(AuthenticatedRouteMixin, ResetScrollMixin,{

	limit: Ember.computed.alias('ENV.paginationLimit.mentions'),

	metaTitle: function() {
		return "Your Notifications";
	}.property(),	

	model: function() {
		return  this.store.find('user-mentions-list', {user_id: this.get('session.user_id')})
	},

	setupController: function(controller, model) {
		controller.set('limit', this.get('limit'));
		controller.set('pagedContent', model);
		this._super(controller, model);
	},
	
	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('mentions');
	},
});