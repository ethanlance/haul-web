import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import config from '../config/environment';
export default Ember.Route.extend(ApplicationRouteMixin,{
	actions: {

		/*
			Application Adapter has triggered the 'authorizationFailed' action.
			We catch it here and tell the authenticator to attempt a token refresh.
		*/
		authorizationFailed: function(error) {
			var refresh_token = this.get('session.refresh_token');
			var auth = this.container.lookup('authenticator:custom')
			auth.refreshAccessToken(null, refresh_token);
		},

		/*
			Authenticator's authenticate method has triggered this action.
			We catch it here and determine where best to redirect this user.
		*/
		sessionAuthenticationSucceeded: function() {

			var _this = this;
			var currentUserId = this.get('session.user_id');

			this.store.find('user', currentUserId)
			.then(function(user) {			

				//_this.get('session').set('currentUser', user);

				if( !Ember.isEmpty(user.get('username'))){
					var attemptedTransition = _this.get('session.attemptedTransition'); 
					if(Ember.isEmpty(attemptedTransition)){  
						_this.transitionTo("profile", user.get('username')  );
					}else{
						console.log("TRANS TO ", attemptedTransition)
						attemptedTransition.retry();
            			_this.set('attemptedTransition', null);
					}
				} else {
					_this.transitionTo("signupusername");
				}
			});
		},

		sessionAuthenticationFailed: function(error) {},

    	authenticateSession: function() {
      		this.transitionTo('login');
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

		goToRoute: function(arg1, arg2, arg3) {

			console.log("Got To Route "  , arg1 , arg2 , arg3)

			if( arg3 ){
				this.transitionTo(arg1, arg2, arg3);
			}else if(arg2){
				this.transitionTo(arg1, arg2);
			}else{
				this.transitionTo(arg1);
			}

			
		}
	}
});