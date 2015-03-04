import Ember from 'ember';
export default Ember.Route.extend( {
	model: function(params) {
		var _this = this;
		var post_id = params.id;
		var user_id = this.modelFor('profile').get('id'); 	
		var key = user_id + "_" + post_id;

		return this.store.find('post', key).then(function(result){
			return result;
		}, function() {
			return _this.transitionTo('not-found');
		});
 	}
});