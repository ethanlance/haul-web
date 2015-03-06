// import HaulAuthenticator from '../authenticators/application';  
//import HaulAuthorizer from '../authorizers/custom';  
import DS from 'ember-data';  

export default {
	name:   'authentication',
	before: 'simple-auth',
  
	initialize: function(container, application) {
		application.deferReadiness();

		DS.RESTAdapter.reopen({
		  headers: { 
		    "Authorization": 'Bearer ' + application.Server.CLIENT_TOKEN
		  }
		});
		
		//container.register('authenticator:custom', HaulAuthenticator); 
		//container.register('authorizer:custom', HaulAuthorizer); 
		application.advanceReadiness();
	}
};
