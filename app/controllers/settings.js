import Ember from 'ember';
import auth from './auth';
	
var SettingsController = Ember.ObjectController.extend({ 
	needs: ["auth"], 
	currentUser: Ember.computed.alias('controllers.auth.currentUser'),

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