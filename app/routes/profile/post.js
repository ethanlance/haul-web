import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AuthenticatedRouteMixin, {
	model: function(params) {
		var _this = this;
		var post_id = params.id;
		var user_id = this.modelFor('profile').get('id'); 	
		var key = user_id + "-" + post_id;

		return this.store.find('post', {user_id:user_id, post_id:post_id}).then(function(result){
			return result.get('content')[0];
		}, function() {
			return _this.transitionTo('not-found');
		});
 	}
});