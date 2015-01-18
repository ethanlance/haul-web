import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.modelFor('seller');
	},
	renderTemplate: function(controller, model) {
		this.render('seller/likes');
		this._super(controller, model);
	}
});