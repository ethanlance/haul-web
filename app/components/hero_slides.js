import Ember from 'ember';
/* global $ */
export default Ember.Component.extend({
	didInsertElement: function() {

		var backgrounds = [
			'/assets/images/hero-cargo-4.jpg',
			'/assets/images/hero-auto-1.jpg',
			'/assets/images/hero-books-1.jpg',
			'/assets/images/hero-outdoors-1.jpg',
		];

		function getRandomInt(min, max) {
		  return Math.floor(Math.random() * (max - min)) + min;
		}
		var random = getRandomInt(0,backgrounds.length);

		var src = backgrounds[random];

		var css = "url("+src+")";

		$('.hero').css('background-image', css);
		
	}
});