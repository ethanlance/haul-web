import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

import config from '../config/environment';
export default Ember.Route.extend( {

	limit: config.APP.paginationLimit.feed,

	model: function() {
		var _this = this;

		if(!_this.get('session.user_id')){
			this.transitionTo('discover');	
		}

		return this.store.filter('feed', function(result){
			if( _this.get('session') && _this.get('session.user_id')) {
				//if(result.get('user_id') === _this.get('session.user_id') ){
					return result	
				//}
			}
		});
	},
	setupController: function(controller, model) {
		controller.set('limit', this.get('limit'));
		controller.set('pagedContent', model);
		this._super(controller, model);
	},
	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('home');
	},

}); 