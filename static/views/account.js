/*global Account, Ember */
(function () {
	'use strict';

	//Apply the layout 'layout_anon' to all routes under the this.resource('account').
    Haul.AccountView = Ember.View.extend({
        layoutName: "layouts/layout_base"
    }); 
})();