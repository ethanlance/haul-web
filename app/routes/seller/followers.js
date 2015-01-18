import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		console.log("HERE?")
		return this.modelFor('seller');
	},
	renderTemplate: function(controller, model) {
		this.render('seller/followers');
		this._super(controller, model);
	}
});