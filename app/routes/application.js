import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import config from '../config/environment';
export default Ember.Route.extend(ApplicationRouteMixin,{

	metaFBAPPID: function() {
		return this.ENV.Server.FACEBOOK_APP_ID;
	}.property(),

	metaOgSitename: "Haul.io",

	metaTitle: "Haul",

  	metaDescription: "Buy, sell and find things that matter.",

  	metaOgImage: "none",

  	doNotRedirectOnAuthentication: false,

  	currentUserIdBinding: 'session.currentUser.id',
  	currentUsernameBinding: 'session.currentUser.username',

  	//IMPORTANT!
  	//If user is logged in but does not have a username, redirect them to the username form.
  	currentUserChanged: function() {
  		if( this.get('currentUserId') && !this.get('currentUsername')) {
  			this.transitionTo('signupusername');
  			//location.href = "/signupusername";
  		}
  	}.observes('currentUserId'),


	metaOgUrl: function() {
		return window.location.href;
	}.property().volatile(),

	actions: {

		doLoading: function(bool) {
			this.controllerFor('application').set('doLoading', bool);
		},

		doNotRedirectOnAuthentication: function(bool) {
			this.set('doNotRedirectOnAuthentication',bool);
		},


		closeRouter: function() {
			return false;
		},

		
		toggleSearch: function() {
			
			if($("#searchDropDown").hasClass('expand')){
				$("#searchDropDown").removeClass('expand')
			}else{
				$("#searchDropDown").addClass('expand')
			}
		}, 
		

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

			if( this.get('doNotRedirectOnAuthentication') ){
				return;
			}

			var _this = this;
			var currentUserId = this.get('session.user_id');

			this.store.find('user', currentUserId)
			.then(function(user) {			



				if( !Ember.isEmpty(user.get('username'))){
					var attemptedTransition = _this.get('session.attemptedTransition'); 
					if(Ember.isEmpty(attemptedTransition)){  
						
						_this.transitionTo("home");

						//window.location = "/home";


					}else{
						attemptedTransition.retry();
            			_this.set('attemptedTransition', null);
					}
				} else {
					_this.transitionTo("signupusername");
					//window.location = "/signupusername";
				}
			});
		},

		sessionAuthenticationFailed: function(error) {},

    	authenticateSession: function() {
      		this.transitionTo('login');
    	},
  	 	
		openModal: function(modalName, model) {
			
			Ember.$('body').addClass('modal-open');
			
			if( !jQuery.isEmptyObject(model)) {
				this.controllerFor(modalName).set('model', model);
			}
			
			return this.render(modalName, {
				into: 'application',
				outlet: 'modal'
			});

		},
	    
	    closeModal: function() {
	    	
	    	Ember.$('body').removeClass('modal-open');
			
			return this.disconnectOutlet({
				outlet: 'modal',
				parentView: 'application'
			});

		},

		goToRoute: function(arg1, arg2, arg3, arg4, arg5) {

			if( arg5 ){
				this.transitionTo(arg1, arg2, arg3, arg4, arg5);
			}else if(arg4){
				this.transitionTo(arg1, arg2, arg3, arg4);
			}else if(arg3){
				this.transitionTo(arg1, arg2, arg3);
			}else if(arg2){
				this.transitionTo(arg1, arg2);
			}else{
				this.transitionTo(arg1);
			}
	
		}
	}
});