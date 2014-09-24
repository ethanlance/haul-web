/*global Products, Ember */
(function () {
    'use strict';

    Haul.AuthLoginController = Ember.ObjectController.extend({
    	actions: {
    		submit: function() {
    			console.log("LOGIN")
    		} 
    	}
    });


    Haul.AuthSignupController = Ember.ObjectController.extend({
        actions: {
            submit: function(){
            	console.log("SIGNUP")
            }
        }
    });
})();