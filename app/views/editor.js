import Ember from 'ember';
/*global $*/
export default Ember.View.extend({

	showPostBinding: 'showPost',
	toolbarScroll: null,

	fix: function() {
		if(!this.get('showPost')){
			var toolbar = $("#toolbar");
			toolbar.removeClass('fixed'); 
		}
	}.observes('showPost'),

	willClearRender: function(){
    	window.removeEventListener('scroll', this.get('toolbarScroll'));
  	},

	didInsertElement: function(){


		function debounce(func, wait, immediate) {
			var timeout;
			return function() {
				var context = this, args = arguments;
				var later = function() {
					timeout = null;
					if (!immediate) {
						func.apply(context, args);
					}
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow){
					func.apply(context, args);
				}
			};
		}

		var toolbarScroll;
		var _this = this;
		toolbarScroll = debounce( function() { 
	    
	    	var nav = $("nav");
	    	var images = $(".gallery-wrapper");
	    	var toolbar = $("#toolbar");
	    	var scrollTop = $(window).scrollTop();
	    	var navBottom = nav.height();
			var imagesTop = images.parent().next().position().top - scrollTop;

	    	if( imagesTop <= navBottom){
	       		
	        	images.addClass('fixed'); 
	        	
	        	if(_this.get('showPost')){
	        		toolbar.addClass('fixed'); 	
	        	}
	        	
	        }else{
	        	
	        	images.removeClass('fixed'); 
	        	toolbar.removeClass('fixed'); 
	        	
	        }
	    
		}, 10);

		this.set('toolbarScroll', toolbarScroll);

		function init() {
			window.addEventListener('scroll', toolbarScroll);
		}
		window.onload = init();

	}
});