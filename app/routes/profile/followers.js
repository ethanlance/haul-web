import Ember from 'ember';
import ResetScrollMixin from '../../mixins/resetscroll';
import config from '../../config/environment';
export default Ember.Route.extend(ResetScrollMixin,{

	limit: config.APP.paginationLimit.followers,

	metaTitle: function() {
		var user = this.modelFor('profile');

		var title =  "Followers of " + user.get('get_display_name');

		return title;
	}.property().volatile(),

	model: function() { 
		var _this  = this;
		return this.store.find('user-followers-list', {user_id: this.modelFor('profile').get('id'), limit:this.get('limit')} )
		.then(function(){
			return _this.store.filter('user-followers-list', function(result){
				if(result.get('user_id') === _this.modelFor('profile').get('id')){
					return result;
				}
			});
		});
	}, 
	setupController: function(controller, model) {
		controller.set('limit', this.get('limit'));
		controller.set('pagedContent', model);
		controller.set('user', this.modelFor('profile'));
		this._super(controller, model);
	}
});