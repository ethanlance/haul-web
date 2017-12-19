import Ember from 'ember';

export default Ember.Component.extend({
	
	classNames: 'haul-social-block',

	didInsertElement: function() {
		this.set('url', window.location.href);	
	}
});