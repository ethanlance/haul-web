
/*global Products, Ember */
(function () {
	'use strict';

	//Apply the layout 'layout_anon' to all routes under the this.resource('auth').
    Haul.AuthView = Ember.View.extend({
        layoutName: "layouts/layout_anon"
    }); 
})();