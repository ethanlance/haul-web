import Ember from 'ember';
import AnonMixin from '../mixins/anon';
export default Ember.Route.extend(AnonMixin, {
	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this._super();
	}
});