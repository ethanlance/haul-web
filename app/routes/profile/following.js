import Ember from 'ember';
import ResetScrollMixin from '../../mixins/resetscroll';
export default Ember.Route.extend(ResetScrollMixin,{

	limit: 10,

	model: function() {
		var _this  = this;
		this.store.find('user-following-list', {user_id: this.modelFor('profile').get('id'), limit:this.get('limit')} );
		return this.store.filter('user-following-list', function(result){
			if(result.get('user_id') === _this.modelFor('profile').get('id')){
				return result	
			}
		});
		//return this.store.find('user-following-list', {user_id: this.modelFor('profile').get('id'), limit:this.get('limit')} );
	}, 
	setupController: function(controller, model) {
		controller.set('limit', this.get('limit'));
		controller.set('pagedContent', model);
		controller.set('user', this.modelFor('profile'));
		this._super(controller, model);
	}
});