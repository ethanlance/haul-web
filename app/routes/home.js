import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

import config from '../config/environment';
export default Ember.Route.extend( {

	limit: config.APP.paginationLimit.feed,

	metaTitle: function() {
		return "Your Feed";
	}.property(),	


	model: function() {
		var _this  = this;


		if(!_this.get('session.user_id')){
			this.transitionTo('discover');	
		}

		return this.store.find('feed', {user_id: _this.get('session.user_id'), limit:this.get('limit')} )
		.then(function(){
			return _this.store.filter('feed', function(result){ 
				return result; 
			});
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