
//Haul App
window.Haul = Ember.Application.create({
	LOG_TRANSITIONS: true,
	LOG_TRANSITIONS_INTERNAL: true,
});//WithMixins(Ember.Facebook);

//Facebook
//Haul.set('appId', '443672575768207');

$.cookie.json = true;


//Store
Haul.Store = DS.Store.extend({
  adapter: Haul.ApplicationAdapter
});


Haul.TooltipBoxController = Bootstrap.TooltipBoxController

//GLOABL SETTINGS.  HOW, WHERE SHOULD WE HANDLE THIS STUFF?
Haul.PRODUCT_SERVER_HOST = "http://localhost:8084";
Haul.IMAGE_SERVER_HOST = "http://localhost:8082";
Haul.USER_SERVER_HOST = "http://localhost:8080";
Haul.CLIENT_TOKEN = "5eed07b8d71cf26f6df6566cf705adaa";
Haul.FACEBOOK_APP_ID = "443672575768207";
