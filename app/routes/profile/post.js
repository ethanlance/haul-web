import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AuthenticatedRouteMixin, {
	model: function(params) {
		var _this = this;
		var post_id = params.id;
		var user_id = this.modelFor('profile').get('id'); 	
		var key = user_id + "-" + post_id;

		return this.store.find('post', key).then(function(result){
			return result;
		}, function() {
			return _this.transitionTo('not-found');
		});
 	}
});