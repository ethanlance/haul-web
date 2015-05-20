/* jshint node: true */

module.exports = function(environment) {



	var ENV = {
		modulePrefix: 'haul',
	 
		environment: environment,

		baseURL: '/',

		locationType: 'history',
		
		EmberENV: {
			FEATURES: {
				// Here you can enable experimental features on an ember canary build
				// e.g. 'with-controller': true
			}
		},

		'ember-braintree': {

		},



		APP: {
			// Here you can pass flags/options to your application instance
			// when it is created

			BT_MERCHANT_ID: '68fqcmrnqzxs6cck',


			Server:{},
			errorMessages: {
				environment:environment,
				getEror: function(key) {
					if( this[key] ){
						return this[key];
					}else{
						return this[400]
					}
				},
				400: "Oops, there was an error. Please try again.",
				401: "Yikes, you are not authorized to do that.",
				404: "Uhoh, not found.",
				409: "Whoops, conflict. This cannot be done."
			}
		}
	};

	//Admin username
	ENV.APP.adminUser = "haul";


	if (environment === 'development') {

		var protocol = 'http://';
		var domain = 'localhost';
		var port = ":4200";


		ENV.APP.baseDomain = protocol + domain + port;

		ENV.APP.validateImageHost = domain + port;

		ENV.APP.validateImagePath = "static.haul.io";

		ENV.APP.braintreeClientToken = 'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiI4OWRkNWUzMGYzODJjOTJkMGI3MDYwMzk2OGMwNmJmMjMzYzc2MjlhMzVmNGVhZmFlODY3YTNkZTkzMzMxNGU0fGNyZWF0ZWRfYXQ9MjAxNS0wMy0yOVQwODoyMjowOS40MzYzNjIwNDArMDAwMFx1MDAyNm1lcmNoYW50X2lkPWRjcHNweTJicndkanIzcW5cdTAwMjZwdWJsaWNfa2V5PTl3d3J6cWszdnIzdDRuYzgiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvZGNwc3B5MmJyd2RqcjNxbi9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbXSwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzL2RjcHNweTJicndkanIzcW4vY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vY2xpZW50LWFuYWx5dGljcy5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIn0sInRocmVlRFNlY3VyZUVuYWJsZWQiOnRydWUsInRocmVlRFNlY3VyZSI6eyJsb29rdXBVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvZGNwc3B5MmJyd2RqcjNxbi90aHJlZV9kX3NlY3VyZS9sb29rdXAifSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiQWNtZSBXaWRnZXRzLCBMdGQuIChTYW5kYm94KSIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQiLCJtZXJjaGFudEFjY291bnRJZCI6InN0Y2gybmZkZndzenl0dzUiLCJjdXJyZW5jeUlzb0NvZGUiOiJVU0QifSwiY29pbmJhc2VFbmFibGVkIjp0cnVlLCJjb2luYmFzZSI6eyJjbGllbnRJZCI6IjExZDI3MjI5YmE1OGI1NmQ3ZTNjMDFhMDUyN2Y0ZDViNDQ2ZDRmNjg0ODE3Y2I2MjNkMjU1YjU3M2FkZGM1OWIiLCJtZXJjaGFudEFjY291bnQiOiJjb2luYmFzZS1kZXZlbG9wbWVudC1tZXJjaGFudEBnZXRicmFpbnRyZWUuY29tIiwic2NvcGVzIjoiYXV0aG9yaXphdGlvbnM6YnJhaW50cmVlIHVzZXIiLCJyZWRpcmVjdFVybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tL2NvaW5iYXNlL29hdXRoL3JlZGlyZWN0LWxhbmRpbmcuaHRtbCJ9LCJtZXJjaGFudElkIjoiZGNwc3B5MmJyd2RqcjNxbiIsInZlbm1vIjoib2ZmbGluZSIsImFwcGxlUGF5Ijp7InN0YXR1cyI6Im1vY2siLCJjb3VudHJ5Q29kZSI6IlVTIiwiY3VycmVuY3lDb2RlIjoiVVNEIiwibWVyY2hhbnRJZGVudGlmaWVyIjoibWVyY2hhbnQuY29tLmJyYWludHJlZXBheW1lbnRzLmRldi1kY29wZWxhbmQiLCJzdXBwb3J0ZWROZXR3b3JrcyI6WyJ2aXNhIiwibWFzdGVyY2FyZCIsImFtZXgiXX19';


		ENV.APP.LOG_RESOLVER = false;
		ENV.APP.LOG_ACTIVE_GENERATION = true;
		ENV.APP.LOG_TRANSITIONS = true;
		ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		ENV.APP.LOG_VIEW_LOOKUPS = true;

		ENV.APP.Server.FEED_SERVER_HOST = protocol + domain + ":8089";
		ENV.APP.Server.SEARCH_SERVER_HOST = protocol + domain + ":8087";
		ENV.APP.Server.COMMENT_SERVER_HOST = protocol + domain + ":8086";
		ENV.APP.Server.FOLLOW_SERVER_HOST = protocol + domain + ":8085";
		ENV.APP.Server.WANT_SERVER_HOST = protocol + domain + ":8084";
		ENV.APP.Server.POST_SERVER_HOST = protocol + domain + ":8083";
		ENV.APP.Server.IMAGE_SERVER_HOST = protocol + domain + ":8081";
		ENV.APP.Server.USER_SERVER_HOST = protocol + domain + ":8080";
		ENV.APP.Server.PROSPER_SERVER_HOST = protocol + domain + ":8090";
		ENV.APP.Server.HARVEST_SERVER_HOST = protocol + domain + ":8091";

		ENV.APP.Server.CLIENT_ID = "5eed07b8d71cf26f6df6566cf705adaa";
		
		ENV.APP.Server.CLIENT_TOKEN = "client_5eed07b8d71cf26f6df6566cf705adaa";
			
		
		ENV.APP.Server.FACEBOOK_APP_ID = "443672575768207";

		ENV.APP.pollingTime = {
			comments: 10000,
			mention_count: 10000
		}
	}

	if (environment === 'test') {
		// Testem prefers this...
		ENV.baseURL = '/';
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'production') {

		ENV.APP.baseDomain = "https://alpha.haul.io";
		
		ENV.APP.validateImageHost = 'haul.io';
		ENV.APP.validateImagePath = "static.haul.io";

		ENV.APP.Server.FEED_SERVER_HOST = "https://feed.haul.io";
		ENV.APP.Server.SEARCH_SERVER_HOST = "https://search.haul.io";
		ENV.APP.Server.COMMENT_SERVER_HOST = "https://comment.haul.io";
		ENV.APP.Server.FOLLOW_SERVER_HOST = "https://follow.haul.io";
		ENV.APP.Server.WANT_SERVER_HOST = "https://like.haul.io";
		ENV.APP.Server.POST_SERVER_HOST = "https://post.haul.io";
		ENV.APP.Server.IMAGE_SERVER_HOST = "https://image.haul.io";
		ENV.APP.Server.USER_SERVER_HOST = "https://user.haul.io";
		ENV.APP.Server.PROSPER_SERVER_HOST = "https://prosper.haul.io";
		ENV.APP.Server.HARVEST_SERVER_HOST = "https://harvest.haul.io";


		ENV.APP.Server.CLIENT_ID = "5eed07b8d71cf26f6df6566cf705adaa";
		ENV.APP.Server.CLIENT_TOKEN = "client_5eed07b8d71cf26f6df6566cf705adaa";
		ENV.APP.Server.FACEBOOK_APP_ID = "443672575768207";

		ENV.APP.pollingTime = {
			comments: 10000,
			mention_count: 10000
		}
	}

	if (environment === 'dev-alpha') {

		ENV.APP.baseDomain = "https://alpha.haul.io";
		
		ENV.APP.validateImageHost = 'haul.io';
		ENV.APP.validateImagePath = "static.haul.io";

		ENV.APP.Server.FEED_SERVER_HOST = "https://feed.haul.io";
		ENV.APP.Server.SEARCH_SERVER_HOST = "https://search.haul.io";
		ENV.APP.Server.COMMENT_SERVER_HOST = "https://comment.haul.io";
		ENV.APP.Server.FOLLOW_SERVER_HOST = "https://follow.haul.io";
		ENV.APP.Server.WANT_SERVER_HOST = "https://like.haul.io";
		ENV.APP.Server.POST_SERVER_HOST = "https://post.haul.io";
		ENV.APP.Server.IMAGE_SERVER_HOST = "https://image.haul.io";
		ENV.APP.Server.USER_SERVER_HOST = "https://user.haul.io";
		ENV.APP.Server.PROSPER_SERVER_HOST = "https://prosper.haul.io";
		NV.APP.Server.HARVEST_SERVER_HOST = "https://harvest.haul.io";


		ENV.APP.Server.CLIENT_ID = "5eed07b8d71cf26f6df6566cf705adaa";
		ENV.APP.Server.CLIENT_TOKEN = "client_5eed07b8d71cf26f6df6566cf705adaa";
		ENV.APP.Server.FACEBOOK_APP_ID = "443672575768207";

		ENV.APP.pollingTime = {
			comments: 10000,
			mention_count: 10000
		}
	}



	ENV.APP.paginationLimit = {
		feed: 20,
		posts: 20,
		followers: 20,
		following: 20,
		likes: 20,
		comments: 10,
		search: 20,
		typeahead_search: 5,
		mentions: 2
	}

	ENV['simple-auth'] = {
		store: 'simple-auth-session-store:local-storage',
		authenticator: 'authenticator:custom',
		 authorizer: 'authorizer:custom',
		authenticationRoute: 'discover',
		refreshAccessTokens: true
	};
	return ENV;
};
