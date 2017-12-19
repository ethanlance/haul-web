import Ember from 'ember';
import ResetScrollMixin from '../mixins/resetscroll';
import config from '../config/environment';
export default Ember.Route.extend(ResetScrollMixin,{

	limit: config.APP.paginationLimit.posts,

	haulUser: null,

	metaTitle: function() {
		return "About Haul";
	}.property(),	

	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('about');
	},
});