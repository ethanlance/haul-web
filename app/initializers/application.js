// app/initializers/authentication.js
import HaulAuthenticator from '../authenticators/application';  

export default {
	name:   'authentication',
	before: 'simple-auth',
  
	initialize: function(container, application) {
		application.deferReadiness();
		console.log("INITIALIZE Authenticator", application);


		// application.register('haul:main', application.Server, {instantiate: false, singleton: true});
		// application.inject('controller', 'Config', 'haul:main');
  //   	application.inject('route', 'Config', 'haul:main');
  //   	application.inject('adapter', 'Config', 'haul:main');


    	//this.register('session:current', App.Session, {singleton: true});
    	//this.inject('controller', 'session', 'session:current');


		container.register('authenticator:custom', HaulAuthenticator); 
		application.advanceReadiness();
	}
};
