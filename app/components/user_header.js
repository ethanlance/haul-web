import Ember from 'ember';

export default Ember.Component.extend({	 

	watchScroll: null,
	fixedByDefault:false,

	willClearRender: function(){
    	window.removeEventListener('scroll', this.get('watchScroll'));
  	},

	didInsertElement: function(){

		if( this.get('fixedByDefault') ){ 
	    	var logo = $(".logo"); 
	        logo.addClass('shrink');  
	        return;
		}



		function debounce(func, wait, immediate) {
			var timeout;
			return function() {
				var context = this, args = arguments;
				var later = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow){
					func.apply(context, args);
				}
			};
		};

		
		var _this = this;
		var watchScroll = debounce( function() { 
	    
	    	var nav = $("nav");
	    	var fixThis = $(".profile-container");
	    	var logo = $(".logo");
	    	var btn = $('.btn-list-grid');

	    	var scrollTop = $(window).scrollTop();
	    	var navBottom = nav.height();
			var fixTop = fixThis.parent().position().top - scrollTop;

	    	if( fixTop <= navBottom){
	       		//console.log("ADD " + fixTop + " <= "+ navBottom) 
	        	fixThis.addClass('fixed');  
	        	logo.addClass('shrink');  
	        	if(btn){
	        		btn.addClass('fixed'); 
	        	} 
	        }else{
	        	//console.log("REMOVE " + fixTop + " > "+ navBottom)
	        	fixThis.removeClass('fixed');
	        	logo.removeClass('shrink'); 
	        	if(btn){
	        		btn.removeClass('fixed'); 
	        	} 
	        }
	    
		}, 10);

		this.set('watchScroll', watchScroll);

		function init() {
			window.addEventListener('scroll', watchScroll);
		}
		window.onload = init();

	}
});