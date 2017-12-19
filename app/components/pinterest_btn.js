import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'a',
	attributeBindings: [
		'data-pin-do', 
		'data-pin-config',
		'href'
	],
	imageBinding: 'image',
	href: "",

	didInsertElement: function() {
		this.set('url', window.location.href);	
	},
	
	ready: function() { 
		var href = "https://www.pinterest.com/pin/create/button/?url=" + this.get('url') +
    		"&media=" + this.get('image') +
    		"&description=" + this.get('description');
		this.set('href', href);
	}.observes('image')
});