import Ember from 'ember';
import ResetScrollMixin from '../../mixins/resetscroll';
import config from '../../config/environment';
export default Ember.Route.extend(ResetScrollMixin,{

	limit: config.APP.paginationLimit.likes,

	model: function() {
		var _this  = this;
		this.store.find('user-likes-list', {user_id: this.modelFor('profile').get('id'), limit:this.get('limit')} );
		return this.store.filter('user-likes-list', function(result){
			if(result.get('user_id') === _this.modelFor('profile').get('id')){
				return result;
			}
		});
	}, 
	setupController: function(controller, model) {
		controller.set('limit', this.get('limit'));
		controller.set('pagedContent', model);
		controller.set('user', this.modelFor('profile'));
		this._super(controller, model);
	}
});