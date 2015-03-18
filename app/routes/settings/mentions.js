import Ember from 'ember';
export default Ember.Route.extend({

	limit: Ember.computed.alias('ENV.paginationLimit.mentions'),

	model: function() {	
		var _this = this;
		return this.store.find('user-mentions-list', {user_id: this.get('session.user_id'), limit:this.get('limit')} )
		.then(function(){
			return _this.store.filter('user-mentions-list', function(result){
				return result;
			});
		});
	},
	setupController: function(controller, model) {
		controller.set('limit', this.get('limit'));
		controller.set('pagedContent', model);
		this._super(controller, model);
	}
});