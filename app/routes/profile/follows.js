import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import ResetScrollMixin from '../../mixins/resetscroll';
export default Ember.Route.extend(AuthenticatedRouteMixin, ResetScrollMixin,{
	model: function() {
		return this.modelFor('profile');
	}, 
	renderTemplate: function(controller, model) {
		this.render('profile/follows');
		this._super(controller, model);
	}
});