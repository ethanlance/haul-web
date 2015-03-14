import Ember from 'ember';
export default Ember.Mixin.create({
	actions: {
		openModal: function(modalName, model) {
			this.sendAction('openModal', modalName, model);
		},
		goToRoute: function(arg1, arg2, arg3) {
			this.sendAction('goToRoute',arg1, arg2, arg3);
		}
	}
});