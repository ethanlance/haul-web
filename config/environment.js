/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'haul',
    podModulePrefix: 'app/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'history',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
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

  // ENV.contentSecurityPolicy = {
  //   'default-src': "'self' https://s-static.ak.facebook.com",
  //   'frame-src': "'self' https://s-static.ak.facebook.com http://s-static.ak.facebook.com",
  //   'script-src': "'self' 'unsafe-eval' http://fonts.googleapis.com https://s-static.ak.facebook.com http://connect.facebook.net https://platform.twitter.com ", // Allow scripts from https://cdn.mxpnl.com
  //   'font-src': "'self' http://fonts.gstatic.com http://fonts.googleapis.com", // Allow fonts to be loaded from http://fonts.gstatic.com
  //   'connect-src': "'self' https://s-static.ak.facebook.com http://connect.facebook.net https://platform.twitter.com http://localhost", // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
  //   'img-src': "'self'",
  //   'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com http://connect.facebook.net https://platform.twitter.com http://localhost", // Allow inline styles and loaded CSS from http://fonts.googleapis.com 
  //   'media-src': "'self'"
  // }

  if (environment === 'development') {

    ENV.APP.LOG_RESOLVER = false;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.APP.Server.FEED_SERVER_HOST = "http://localhost:8089";
    ENV.APP.Server.SEARCH_SERVER_HOST = "http://localhost:8087";
    ENV.APP.Server.COMMENT_SERVER_HOST = "http://localhost:8086";
    ENV.APP.Server.FOLLOW_SERVER_HOST = "http://localhost:8085";
    ENV.APP.Server.WANT_SERVER_HOST = "http://localhost:8084";
    ENV.APP.Server.POST_SERVER_HOST = "http://localhost:8083";
    ENV.APP.Server.PRODUCT_SERVER_HOST = "http://localhost:8082";
    ENV.APP.Server.IMAGE_SERVER_HOST = "http://localhost:8081";
    ENV.APP.Server.USER_SERVER_HOST = "http://localhost:8080";
    ENV.APP.Server.CLIENT_ID = "5eed07b8d71cf26f6df6566cf705adaa";
    ENV.APP.Server.CLIENT_TOKEN = "client_5eed07b8d71cf26f6df6566cf705adaa";
    ENV.APP.Server.FACEBOOK_APP_ID = "443672575768207";
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
    ENV.APP.Server.FEED_SERVER_HOST = "http://localhost:8089";
    ENV.APP.Server.SEARCH_SERVER_HOST = "http://localhost:8087";
    ENV.APP.Server.COMMENT_SERVER_HOST = "http://localhost:8086";
    ENV.APP.Server.FOLLOW_SERVER_HOST = "http://localhost:8085";
    ENV.APP.Server.WANT_SERVER_HOST = "http://localhost:8084";
    ENV.APP.Server.POST_SERVER_HOST = "http://localhost:8083";
    ENV.APP.Server.PRODUCT_SERVER_HOST = "http://localhost:8082";
    ENV.APP.Server.IMAGE_SERVER_HOST = "http://localhost:8081";
    ENV.APP.Server.USER_SERVER_HOST = "http://localhost:8080";
    ENV.APP.Server.CLIENT_ID = "5eed07b8d71cf26f6df6566cf705adaa";
    ENV.APP.Server.CLIENT_TOKEN = "client_5eed07b8d71cf26f6df6566cf705adaa";
    ENV.APP.Server.FACEBOOK_APP_ID = "443672575768207";
  }

  ENV.APP.paginationLimit = {
    feed: 10,
    posts: 1,
    followers: 20,
    following: 20,
    likes: 1,
    comments: 3
  }

  ENV['simple-auth'] = {
    store: 'simple-auth-session-store:local-storage',
    authenticator: 'authenticator:custom',
    authenticationRoute: 'login',
    refreshAccessTokens: true
  };
  return ENV;
};
