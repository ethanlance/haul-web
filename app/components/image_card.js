import Ember from 'ember'
export default Ember.Component.extend({
	actions: {
		imageDelete: function(event) {
			this.sendAction('imageDelete', event);
			this.remove();
		}
	}
});