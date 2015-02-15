import Ember from "ember";  
import DS from 'ember-data'; 
import Session from "simple-auth/session";
 
export default {  
  name: "custom-session",
  before: "authentication", 
  initialize: function(container, application) { 

  	application.set('currentUser', null);

  	Session.reopen({
	  	setCurrentUser: function() {
			var user_id = this.get("user_id");
			var _this = this;

			if (!Ember.isEmpty(user_id)) { 
				return container.lookup("store:main").find("user", user_id).then(function(user) {
					
					user.set('access_token', _this.get('access_token'));
					user.set('refresh_token', _this.get('refresh_token'));

					_this.set("currentUser", user);
					application.set('currentUser', user);
					console.log("SESSION CURRENT USER CHANGED", user.get('name')); 

					DS.RESTAdapter.reopen({
					  headers: { 
					    "Authorization": "Bearer " + _this.get('access_token')
					  }
					});			

				}, function(error){
					console.log("INITIALIZER ERROR", error);
				});
			}

		}.observes("user_id")
	});
  }
};