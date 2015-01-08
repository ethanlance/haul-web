import Ember from 'ember';
import ApplicationRoute from './application';

import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

var SellerRoute = ApplicationRoute.extend(AuthenticatedRouteMixin,{
	model: function(params) { 
		var _this = this; 
		return this.store.find('user', params.user_slug).then(function(result){ 
			return result;
		}, function() {
			return _this.transitionTo('not-found');
		});
	},	
	serialize: function(model) { 
		if(!Ember.isEmpty(model)){
 	   		return { user_slug: model.get('id') };
		}
	}
});
export default SellerRoute;