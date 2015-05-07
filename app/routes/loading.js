import Ember from 'ember';
import ResetScrollMixin from '../mixins/resetscroll';
export default Ember.Route.extend(ResetScrollMixin,{

	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('loading');
	},
});