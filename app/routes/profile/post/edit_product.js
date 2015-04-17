import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import ResetScrollMixin from '../../../mixins/resetscroll';

export default Ember.Route.extend(AuthenticatedRouteMixin, ResetScrollMixin, {

	beforeModel: function(transition) {
        this._super(transition);
        if( this.modelFor('profile').get('id') !== this.get('session.currentUser.id')){
        	this.transitionTo('not-authorized');
        }
	},

	model: function() { 
		return this.modelFor('profile.post');
	},
	
	renderTemplate: function() {    
    	this.render({
      		into: 'application',
      		outlet: 'modal'
    	});    
  	}
}); 