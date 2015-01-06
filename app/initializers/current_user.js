import Ember from "ember";  
import Session from "simple-auth/session";
 
export default {  
  name: "custom-session",
  before: "simple-auth",
  after: "store",
  initialize: function(container, application) {


	Session.reopen({
	  setCurrentUser: function() {
		var id = this.get("user_id");
		var _this = this;

		if (!Ember.isEmpty(id)) {

		  //Pause App.
		  application.deferReadiness();

		  return container.lookup("store:main").find("user", id).then(function(user) {
			
			//Add tokens to user object.
			user.set('access_token', _this.get('access_token'));
			user.set('refresh_token', _this.get('refresh_token'));

			//Add currentUser object to Session.
			_this.set("currentUser", user);

			//Make this.get('currentUser') available to routes, controllers, adapters.
			container.register('user:current', user, {instantiate: false, singleton: true});
			container.injection('route', 'currentUser', 'user:current');
			container.injection('controller', 'currentUser', 'user:current');
			container.injection('adapter', 'currentUser', 'user:current');


			//Resume app.
			application.advanceReadiness();

		}, function(error){
			//Resume app.
				application.advanceReadiness();
			});
		}
	  }.observes("user_id", "access_token", "refresh_token")
	});
  }
};