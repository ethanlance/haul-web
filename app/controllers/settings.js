import Ember from 'ember';
	
var SettingsController = Ember.ObjectController.extend({ 
	currentUserBinding: 'Haul.currentUser',

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
export default SettingsController;