// app/initializers/authentication.js
import HaulAuthenticator from '../authenticators/application';  
import DS from 'ember-data'; 
export default {
	name:   'authentication',
	before: 'simple-auth',
  
	initialize: function(container, application) {
		application.deferReadiness();
		console.log("INITIALIZE Authenticator", application);


		DS.RESTAdapter.reopen({
		  headers: { 
		    "Authorization": "Bearer client_5eed07b8d71cf26f6df6566cf705adaa"
		  }
		});
		
		container.register('authenticator:custom', HaulAuthenticator); 
		application.advanceReadiness();
	}
};
