/*global Search, Ember */
(function () {
	'use strict';

	//Apply the layout 'layout_anon' to all routes under the this.resource('search').
    Haul.SearchView = Ember.View.extend({
        layoutName: "layouts/layout_base"
    }); 
})();