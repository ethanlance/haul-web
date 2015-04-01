import Ember from 'ember';
var $ = Ember.$;

export default Ember.Component.extend({
  	tagName: 'a',
  	classNames: 'twitter-share-button',
  	attributeBindings: [
		'data-size', 
		'data-url', 
		'data-text', 
		'data-hashtags',
		'data-count'
  	],



	didInsertElement: function() {
		this.set('data-url', window.location.href);

		function loadTwitter() {
			if( window.twttr ){
		  		window.twttr.widgets.load();
		  		$('iframe.twitter-share-button').css('width', '78px');    
		  		clearInterval(tInterval);
			}
		}

	  	var tInterval = setInterval(function(){ loadTwitter() }, 500);
		  
	}
});