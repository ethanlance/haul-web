
export default {
  	after:'meta',
  	name: 'ember-social-services',
  	
  	initialize: function(container, application){
		
		application.inject('controller', 'socialApiClient', 'service:facebook-api-client');  		
		application.inject('router', 'socialApiClient', 'service:facebook-api-client');  		
		
		application.inject('component:facebook-btn', 'socialApiClient', 'service:facebook-api-client');
		
		application.inject('component:twitter-btn', 'socialApiClient', 'service:twitter-api-client');

		application.inject('component:tumblr-btn', 'socialApiClient', 'service:tumblr-api-client');

		//application.inject('component:pinterest-btn', 'socialApiClient', 'service:linkedin-api-client');

		//application.inject('component:tumblr-btn', 'socialApiClient', 'service:twitter-api-client');
	}
};