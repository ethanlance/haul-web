/*global Products, Ember */
(function () {
	'use strict'; 

	Haul.SettingsController = Ember.ObjectController.extend({
		needs: ["auth"],

		start: function() {
			// $('#myAffix').affix({
			//   offset: {
			//     top: 100,
			//     bottom: function () {
			//       return (this.bottom = $('.footer').outerHeight(true))
			//     }
			//   }
			// })


		}.on("init"),

	});

})();	