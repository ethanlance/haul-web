import Ember from 'ember';
import config from '../config/environment';
import ErrorMixin from '../mixins/server_error';
import FollowMixin from '../mixins/follow';
var Config = config.APP;

export default Ember.ObjectController.extend( ErrorMixin, FollowMixin, {

	needs: ['login'],

	client_token: Config.Server.CLIENT_TOKEN,
	
	host: Config.Server.USER_SERVER_HOST,

	queryParams: ['ticket_id', 'user_id'],

	//Template Keys
	ticket_id: null,

	user_id: null,
	
	isProcessing: false,
	
	error: false,

	reset: function() {
		this.set('error', false); 
		this.set('isProcessing', false);
	},

	actions: {
		focus: function() {
			this.reset();
		},

		//LOGIN via email, password
		submit: function() {
			this.set('isProcessing', true);
			
			var _this = this;
			
			var model = this.get('model');

			//We need to tell the routes/application NOT to redirect
			//the user upon authentication.  We'll do the redirect later
			//within this method.
			this.send('doNotRedirectOnAuthentication', true);

			model.validate()

			//Is username available?
			.then(function(){
				return _this.store.find("user", _this.get('username'))
				.then(
					function found(user){
						throw new Error("Username is not available");
					},

					function available(error){
						//continue, the username is available.
						return [];
					}

				);
			})

			.then(function(user){

				if( !Ember.isEmpty(user)) {
					//user is taken.
					throw new Error("Username is not available");
					return;
				} else {
					return;
				}
			})


			//Authenticate the user:
			.then(function(){

				var url = '/users/' + _this.get('user_id') + "/tickets/" + _this.get('ticket_id');
				
				var data = _this.getProperties('firstname', 'lastname', 'password');
				
				return _this.get('controllers.login').authenticate(url, 'put', data);

			})

			//Now Save username:
			.then(function(){

				_this.send('doNotRedirectOnAuthentication', false);
				
				var data 	= _this.getProperties('username', 'user_id');

				var model 	= _this.store.createRecord('username', data);

				model.save()
				.then(
					function success() {
						//nothing to do.
						return;
					},	
					function failure(error) {
						//Well, user is already logged in with the ticket id, 
						//we cannot use this form anymore.  
						_this.transitionToRoute("signupusername");
					}
				);
			
			})


			//Set the session.
			.then(function(user){
				return _this.store.find("user", _this.get('user_id'))
				.then(function(user){
					var session = _this.get('session');
					var currentUser = session.get('currentUser');

					var username = currentUser.get('username');

					//Follow Mixin
					//Now have this user follow @haul
					_this.setFollowByUsername('haul');

					return;
				});
			})


			.then(
				function success(){
					//Now redirect the logged in user to Discover page.
					
					//if the username was not set on the session, then do hard refresh
					if( Ember.isEmpty(_this.get('session.currentUser')) || Ember.isEmpty(_this.get('session.currentUser.username'))){
						window.location = _this.ENV.baseDomain + "/discover";
					}else{
						_this.transitionToRoute("discover");	
					}

				},
				function failed(error) {
					console.log("error", error);
					_this.set('isProcessing', false);
					_this.set('error', true); 
					_this.handleServerError(error);
				}
			);
	 	}
	}
});
