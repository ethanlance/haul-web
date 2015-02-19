import Ember from 'ember';

var PinterestBtnComponent = Ember.Component.extend({
	tagName: 'a',
	attributeBindings: [
		'data-pin-do', 
		'data-pin-config',
		'href'
	],
	imageBinding: 'image',
	href: "",
	
	ready: function() { 
		var href = "https://www.pinterest.com/pin/create/button/?url=" + this.get('url') +
    		"&media=" + this.get('image') +
    		"&description=" + this.get('description');
		this.set('href', href);
	}.observes('image')
});
export default PinterestBtnComponent;