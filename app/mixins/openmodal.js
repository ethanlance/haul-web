import Ember from 'ember';
export default Ember.Mixin.create({
	actions: {
		openModal: function(modalName, model) {
			console.log("PASS ALONG ", modalName);
			this.sendAction('openModal', modalName, model);
		}
	}
});