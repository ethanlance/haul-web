import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import ResetScrollMixin from '../mixins/resetscroll';
export default Ember.Route.extend(AuthenticatedRouteMixin, ResetScrollMixin, {

	post: null,

	metaTitle: function() {
		
		var post = this.get('post');

		var title = "Buy - " + post.get('product_name');
		
		return title;

	}.property('post'),

  	metaDescription: function() {
		
		var post = this.get('post');

		var title = " " + post.get('subject');
		
		return title;

	}.property('post'),


	model: function(params) {
		var _this = this;
		var post_id = params.id;

		return this.store.find('post', post_id).then(function(result){
			
			_this.set('post', result);
 
 			return result;

		}, function() {
			return _this.transitionTo('not-found');
		});
 	},
	renderTemplate: function() {
		this.render('layouts/header_base', {
			into: 'application',
			outlet: 'header'
		});
		this.render('checkout');
	},
});