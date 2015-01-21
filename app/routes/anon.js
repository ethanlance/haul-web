import Ember from 'ember';

export default Ember.Route.extend({
	activate: function() {
		console.log("LOGIN activate")
		Ember.$('body').addClass('anon');
	},
	deactivate: function() {
		console.log("LOGIN deactivate")
		Ember.$('body').removeClass('anon');
	}
});