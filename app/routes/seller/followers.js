import Ember from 'ember';
import ResetScrollMixin from '../../mixins/resetscroll';
export default Ember.Route.extend(ResetScrollMixin,{
	model: function() {
		return this.modelFor('seller');
	},
	renderTemplate: function(controller, model) {
		this.render('seller/followers');
		this._super(controller, model);
	}
});