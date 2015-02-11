import Ember from 'ember';
export default Ember.Mixin.create({
	actions: {
		openModal: function(modalName, model) {
			console.log("PASS ALONG ", modalName);
			this.sendAction('openModal', modalName, model);
		},
		goToRoute: function(arg1, arg2) {
			console.log("INTERCEPTED at userheader")
			this.sendAction('goToRoute',arg1, arg2);
		}
	}
});