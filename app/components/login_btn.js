import Ember from 'ember';

export default Ember.Component.extend({

	actions: {

		onClick: function() {
			this.sendAction('openModal', 'loginmodal', {});
		}
	}
});