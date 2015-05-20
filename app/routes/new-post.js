import Ember from 'ember';
import ResetScrollMixin from '../mixins/resetscroll';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AuthenticatedRouteMixin, ResetScrollMixin, {

	actions: {

		closeRouter: function() { 
			this.transitionTo('home');
			return false;
		}

	},

	metaTitle: function() {
		return "Create New Post";
	}.property(),

	metaDescription: function() {
    	return "Write a post about something that is for sale.";
	}.property(),

	model: function() {
    	return this.store.createRecord('post');
  }
});