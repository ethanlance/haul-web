import Ember from 'ember';

export default Ember.Route.extend({
	controllerName: "forgotpassword",
	model: function() {
		return this.store.createRecord('username');
	}
});