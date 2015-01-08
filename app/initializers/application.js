// app/initializers/authentication.js
import HaulAuthenticator from '../authenticators/application';  

export default {
	name:   'authentication',
	before: 'simple-auth',
  
	initialize: function(container, application) {
		application.deferReadiness();
		console.log("INITIALIZE Authenticator");
		container.register('authenticator:custom', HaulAuthenticator); 
		application.advanceReadiness();
	}
};
