import Ember from 'ember';
export default Ember.Route.extend( {
	model: function(params) {
		var _this = this;
		var post_id = params.id;

		return this.store.find('post', post_id).then(function(result){
			return result;
		}, function() {
			return _this.transitionTo('not-found');
		});
 	}
});