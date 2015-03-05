import HaulAuthenticator from '../authenticators/application';  
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
		
		container.register('authenticator:custom', HaulAuthenticator); 
		application.advanceReadiness();
	}
};
