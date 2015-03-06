import Ember from 'ember';
import ResetScrollMixin from '../../mixins/resetscroll';
export default Ember.Route.extend(ResetScrollMixin,{
	model: function() {
		var user =  this.modelFor('profile');

		return this.store.find('user-followers-list', user.get('id'));
	}, 
	setupController: function(controller, model) {
		controller.set('user', this.modelFor('profile'));
		this._super(controller, model);
	}
});