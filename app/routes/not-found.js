import Ember from 'ember';
import AnonRoute from './anon';
export default AnonRoute.extend({
	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this._super();
	}
});