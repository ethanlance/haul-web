import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
    	authenticateSession: function() {
      		this.transitionTo('signup');
    	},
  	 	
		openModal: function(modalName, model) {
			console.log("MODAL TRIGGER")
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
			console.log("INTERCEPTED at application route");
			console.log(arg1)
			console.log(arg2)
			this.transitionTo(arg1, arg2);
		}
	}
});