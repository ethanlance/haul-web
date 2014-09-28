/*global Products, Ember */
(function () {
    'use strict'; 

	Haul.MessagesController = Ember.ArrayController.extend({
        needs: ["auth"],
    }); 
})();