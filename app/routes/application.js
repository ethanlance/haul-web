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
		}
	}
});