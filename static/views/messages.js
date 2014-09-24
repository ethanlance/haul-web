/*global Messages, Ember */
(function () {
	'use strict';

	//Apply the layout 'layout_anon' to all routes under the this.resource('messages').
    Haul.MessagesView = Ember.View.extend({
        layoutName: "layouts/layout_base"
    }); 
})();