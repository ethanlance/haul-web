import Ember from 'ember';
/* global $ */
export default Ember.Component.extend({

	willDestroyElement: function(){
		$('body').css('background-image', 'none');		
	},

	didInsertElement: function() {

		var backgrounds = [
			'/assets/images/slide1.jpg',
			'/assets/images/slide2.jpg',
			'/assets/images/slide3.jpg',
			'/assets/images/slide4.jpg',
			'/assets/images/slide5.jpg',
		];

		function getRandomInt(min, max) {
		  return Math.floor(Math.random() * (max - min)) + min;
		}
		var random = getRandomInt(0,backgrounds.length);

		var src = backgrounds[random];

		var css = "url("+src+")";

		$('body').css('background-image', css);
		
	}
});