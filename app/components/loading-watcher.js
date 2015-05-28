import Ember from 'ember';
export default Ember.Component.extend({

	didInsertElement: function() {
		this.sendAction('doLoading', true);
	},

	willDestroyElement: function() {
		console.log("DESTORY LOADING WATCHER")
		this.sendAction('doLoading', false);
	},

});