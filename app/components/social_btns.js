import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function() {
		this.set('url', window.location.href);	
	}
});