import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import config from '../config/environment';
export default Ember.Route.extend(ApplicationRouteMixin,{
	actions: {

		authorizationFailed: function(error) {
			
			var refresh_token = this.get('session.refresh_token');
			
			console.log("	TRY THIS REFRESH TOKEN:", refresh_token);

			var auth = this.container.lookup('authenticator:custom')
			auth.refreshAccessToken(null, refresh_token);
		},

		sessionAuthenticationFailed: function(error) {
			console.log("SESSION AUTHENTICATE FAILED!", error);
		},

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