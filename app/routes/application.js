import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
    	authenticateSession: function() {
      		this.transitionTo('login');
    	}
  	}
});