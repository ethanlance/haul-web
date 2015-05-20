import Ember from 'ember';
import ResetScrollMixin from '../mixins/resetscroll';
import config from '../config/environment';
export default Ember.Route.extend(ResetScrollMixin,{

	limit: config.APP.paginationLimit.posts,

	haulUser: null,

	model: function(params) { 
		var _this = this; 
		return this.store.find('user', 'haul').then(function(result){ 
			return result;
		})
		.then(function(user){

			_this.set('haulUser', user);

			return _this.store.find('user-likes-list', { 
				user_id: user.id, 
				limit: _this.get('limit')
			})
			.then(function(){
				return _this.store.filter('user-likes-list', function(result){
					var haulUser = _this.get('haulUser');
					if(result.get('user_id') === haulUser.id ){
						return result	
					}
				});
			});

		}, function(error) {
			
			_this.transitionTo('not_found');
			return false;

		});
	},
	
	setupController: function(controller, model) {
		controller.set('limit', this.get('limit'));
		controller.set('pagedContent', model);
		controller.set('user', this.modelFor('profile'));
		this._super(controller, model);
	},

	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('discover');
	},
});