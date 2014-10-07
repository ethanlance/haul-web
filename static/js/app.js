
//Haul App
window.Haul = Ember.Application.create({
	LOG_TRANSITIONS: true,
	LOG_TRANSITIONS_INTERNAL: true,
});//WithMixins(Ember.Facebook);

//Facebook
//Haul.set('appId', '443672575768207');

$.cookie.json = true;

//Layout
// Haul.ApplicationView = Ember.View.extend({
// 	layoutName: "layout_base"
// 	init: function() { console.log("Application View Init")}
// });

//Store
Haul.Store = DS.Store.extend({
  adapter: Haul.ApplicationAdapter
});


Haul.TooltipBoxController = Bootstrap.TooltipBoxController
