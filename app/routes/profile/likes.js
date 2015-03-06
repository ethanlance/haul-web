import Ember from 'ember';
import ResetScrollMixin from '../../mixins/resetscroll';
export default Ember.Route.extend(ResetScrollMixin,{
	model: function() {
		return this.store.find('user-likes-list', {user_id: this.modelFor('profile').get('id')} );
	}, 
	setupController: function(controller, model) {
		controller.set('user', this.modelFor('profile'));
		this._super(controller, model);
	}
});