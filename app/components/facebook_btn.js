import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: 'fb-share-button',
	attributeBindings: [
		'data-href', 
		'data-layout'
	],

	didInsertElement: function() {
		this.set('data-href', window.location.href);	
	}
});