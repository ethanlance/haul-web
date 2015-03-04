import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import ResetScrollMixin from '../../mixins/resetscroll';
export default Ember.Route.extend(AuthenticatedRouteMixin, ResetScrollMixin,{
	model: function() {
		return this.store.find('user-likes-list', {user_id: this.modelFor('profile').get('id')} );
	}, 
	setupController: function(controller, model) {
		controller.set('user', this.modelFor('profile'));
		this._super(controller, model);
	}
});