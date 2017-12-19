import Ember from 'ember';
export default Ember.Component.extend({

	didInsertElement: function() {
		this.sendAction('doLoading', true);
	},

	willDestroyElement: function() {
		this.sendAction('doLoading', false);
	},

});