import Ember from 'ember';
export default Ember.ObjectController.extend({
	
	actions: { 

		close: function() {
			this.set('animateClose', true);
		},

		cancel: function() {
			this.set('animateClose', true);
		},
	}
});