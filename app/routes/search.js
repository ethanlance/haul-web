import Ember from 'ember';
import ResetScrollMixin from '../mixins/resetscroll';
export default Ember.Route.extend(ResetScrollMixin,{

	metaTitle: function() {
		return "Search Haul";
	}.property(),	

	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('search');
	},
});