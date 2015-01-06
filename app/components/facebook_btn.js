import Ember from 'ember';

var FacebookBtnComponent = Ember.Component.extend({
	tagName: 'div',
	classNames: 'fb-share-button',
	attributeBindings: [
		'data-href', 
		'data-layout'
	],
});
export default FacebookBtnComponent;