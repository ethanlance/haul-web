import DS from 'ember-data';  
import ENV from '../config/environment';
export default {
	name:   'environment',
	before: 'authentication',
  
	initialize: function(container, application) {
		application.deferReadiness(); 

		application.register('environment:main', ENV.APP, { instantiate: false });
    	application.inject('route', 'ENV', 'environment:main');
    	application.inject('controller', 'ENV', 'environment:main');
    	application.inject('component', 'ENV', 'environment:main');
    	application.inject('application', 'ENV', 'environment:main');

		application.advanceReadiness();
	}
};
