Haul.PinterestBtnComponent = Ember.Component.extend({
	href: "",
	imageBinding: 'image',
	ready: function() { 
		var href = "https://www.pinterest.com/pin/create/button/?url=" + this.get('url') +
    		"&media=" + this.get('image') +
    		"&description=" + this.get('description');
		this.set('href', href);
	}.observes('image')
});
