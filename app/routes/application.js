import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
    	authenticateSession: function() {
      		this.transitionTo('signup');
    	},
  	 	
		openModal: function(modalName, model) {
			this.controllerFor(modalName).set('model', model);
			return this.render(modalName, {
				into: 'application',
				outlet: 'modal'
			});
		},
	    
	    closeModal: function() {
			return this.disconnectOutlet({
				outlet: 'modal',
				parentView: 'application'
			});
		},

		goToRoute: function(arg1, arg2) {
			this.transitionTo(arg1, arg2);
		}
	}
});