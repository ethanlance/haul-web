import Ember from 'ember';
import ResetScrollMixin from '../mixins/resetscroll';
import config from '../config/environment';
export default Ember.Route.extend(ResetScrollMixin,{

	limit: config.APP.paginationLimit.posts,

	haulUser: null,

	userName: 'haul',

	metaTitle: function() {
		return "Discover Haul";
	}.property(),	

	setupController: function(controller, model) {
		controller.set('limit', this.get('limit'));
		controller.set('pagedContent', model);
		controller.set('user', this.modelFor('profile'));
		this._super(controller, model);
	},

	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('discover');
	},
});