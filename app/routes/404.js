import Ember from 'ember';
import AnonMixin from '../mixins/anon';
import ResetScrollMixin from '../mixins/resetscroll';
export default Ember.Route.extend(AnonMixin, ResetScrollMixin, {
	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('not_found');
	}
});