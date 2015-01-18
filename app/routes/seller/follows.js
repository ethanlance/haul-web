import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.modelFor('seller');
	}, 
	renderTemplate: function(controller, model) {
		this.render('seller/follows');
		this._super(controller, model);
	}
});