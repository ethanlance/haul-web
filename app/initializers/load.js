import Ember from "ember";  
import Session from "simple-auth/session";
 
export default {  
  name: "load-user",
  after: "store", 
  initialize: function(container, application) {

	// var _this = this;
 //  	var p = JSON.parse( localStorage.getItem("ember_simple_auth:session") );
 //  	var user_id = null;
 //  	if( p && p['user_id'] ){
 //  		user_id = p['user_id'];
 //  		var access_token = p['access_token'];
 //  		var refresh_token = p['refresh_token'];	
 //  		console.log("FOUND USER_ID", user_id);
 //  	}

 //  	if( !Ember.isEmpty(user_id) ){

 //  		//PAUSE!
	// 	application.deferReadiness();

	//   	container.lookup("store:main").find("user", user_id).then(function(user) {
			
	// 		//Add tokens to user object.
	// 		user.set('access_token', access_token);
	// 		user.set('refresh_token', refresh_token);

	// 		//container.register('user:current', user, {instantiate: false, singleton: true});
	// 		//container.injection('route', 'currentUser', 'user:current');
	// 		//container.injection('controller', 'currentUser', 'user:current');
	// 		//container.injection('adapter', 'currentUser', 'user:current');

	// 		console.log("INJECTION CURRENT USER CHANGE ", user.get('name'));

	// 		//GO!
	// 		application.advanceReadiness();

	// 	}, function(error){ 
	// 		application.advanceReadiness();
	// 	});
 //  	}
  }
};