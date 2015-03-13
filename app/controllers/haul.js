import Ember from 'ember';
export default Ember.ObjectController.extend({
	navColumnOpen: false,

	actions: {
		toggleNavColumn: function() {
			this.set('navColumnOpen', !this.get('navColumnOpen'));
		},

		closeNavColumn: function() {
			this.set('navColumnOpen', false);
		}
	}
}); 