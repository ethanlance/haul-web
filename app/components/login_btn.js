import Ember from 'ember';

export default Ember.Component.extend({

	actions: {

		onClick: function() {
			var store = this.container.lookup("store:main");
			this.sendAction('openModal', 'loginmodal', store.createRecord('authlogin'));
		}
	}
});