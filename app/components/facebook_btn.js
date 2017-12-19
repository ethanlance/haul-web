import Ember from 'ember';

export default Ember.Component.extend({
	
	tagName: 'div',

	classNames: 'fb-share-button',

	FB: null,
	
	url: null,

	layout: 'button_count',

	attributeBindings: [
		'data-href', 
		'data-layout'
	],



	didInsertElement: function() {

		this.set('url', this.get('data-href'));
		
	
		var _this = this;
 		this.socialApiClient.load().then(function(FB) {
 			_this.set('FB', FB);
 		
			
      		if (_this._state !== 'inDOM') {
      			return; 
      		}
			
      		var attrs = [];

			attrs.push('data-href="' + _this.get('data-href') + '"');

			attrs.push('data-layout="' + _this.get('data-layout') + '"');
			
      		_this.$().html('<div class="fb-share-button" ' + attrs.join(' ') +'></div>');

      		FB.XFBML.parse(_this.get('element'));

 		});
		
	},
});