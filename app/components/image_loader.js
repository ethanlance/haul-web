import Ember from 'ember';
export default Ember.Component.extend({
	
	wait: 1000,

	isLoaded: false,

	width: null,

	height: null,


	showImage: function() {

		var el = $('#'+ this.get('unHideId'));

		el.removeClass('hide');
	},
 	
 	handleLoad: function() {
 		var _this = this;

 		var placeholder = $(this.get('element')).find('.isPlaceholder');

 		var image = $(this.get('element')).find('.isImage');
 		
 		image = image[0];

 		placeholder = placeholder[0];

 		var classList = image.className.split(/\s+/);
 		for (var i = 0; i < classList.length; i++) {
 			if( classList[i] !== "hide" && classList[i] !== "isImage") {
 				$(placeholder).addClass(classList[i]);
 			}
		}

 		if( this.get('width') ) {
 			$(placeholder).css('width', this.get('width'));
 		}
 		if( this.get('height') ) {
 			$(placeholder).css('height', this.get('height'));
 		}
 		
		
		//When the image loads send out an alert.
		$(image).on('load', function() {
		
			Ember.run(function(){
				_this.set('isLoaded', 'true');
			});
		
		}.bind(this)); 

	}.on('didInsertElement')

});