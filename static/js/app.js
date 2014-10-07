
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
Haul.IMAGE_SERVER_HOST = "http://localhost:8081";
Haul.FACEBOOK_APP_ID = "443672575768207";