/*global Account, Ember */
(function () {
	'use strict';

	//Apply the layout 'layout_anon' to all routes under the this.resource('account').
    Haul.HomeView = Ember.View.extend({
        layoutName: "layouts/layout_home"
    }); 
})();