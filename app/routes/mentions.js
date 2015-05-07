import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import ResetScrollMixin from '../mixins/resetscroll';
export default Ember.Route.extend(AuthenticatedRouteMixin, ResetScrollMixin,{

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
	},
	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('mentions');
	},
});