import Ember from 'ember';
import AnonMixin from '../mixins/anon';
import ResetScrollMixin from '../mixins/resetscroll';
export default Ember.Route.extend(AnonMixin, ResetScrollMixin, {

	metaTitle: function() {
		return "Not Found";
	}.property(),	

	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this._super();
	}
});