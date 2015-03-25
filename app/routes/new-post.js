import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import ResetScrollMixin from '../mixins/resetscroll';
export default Ember.Route.extend(AuthenticatedRouteMixin, ResetScrollMixin, {
    model: function() {
		return this.store.createRecord('post');
	},
	setupController: function(controller, model) {
		controller.set('selectedImages',[]);
		this._super(controller, model);
	},
	renderTemplate: function() {    
    	this.render({
      		into: 'application',
      		outlet: 'modal'
    	});    
  	},
  	deactivate: function() {
    	this.render('empty', {
      		into: 'application',
      		outlet: 'modal'
    	});
  	}
});