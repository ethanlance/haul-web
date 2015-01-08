import Ember from "ember";  
import Session from "simple-auth/session";
 
export default {  
  name: "custom-session",
  before: "authentication", 
  initialize: function(container, application) {

  	Session.reopen({
	  	setCurrentUser: function() {
			var user_id = this.get("user_id");
			var _this = this;

			if (!Ember.isEmpty(user_id)) { 
			  return container.lookup("store:main").find("user", user_id).then(function(user) {

				//Add tokens to user object.
				user.set('access_token', _this.get('access_token'));
				user.set('refresh_token', _this.get('refresh_token'));
				_this.set("currentUser", user);
				console.log("OBSERVE SET CURRENT USER SESSION", user); 

				}, function(error){
					console.log("INITIALIZER ERROR", error);
				});
			}

		}.observes("user_id")
	});
  }
};