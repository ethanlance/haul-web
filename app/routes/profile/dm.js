import Ember from 'ember';
import ResetScrollMixin from '../../mixins/resetscroll';
import config from '../../config/environment';
export default Ember.Route.extend(ResetScrollMixin,{

	limit: config.APP.paginationLimit.likes,

	metaTitle: function() {
		return "Direct Message ";
	}.property().volatile(),


	setupController: function(controller, model) {
		controller.set('user', this.modelFor('profile'));
		this._super(controller, model);
	}
});