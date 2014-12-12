Haul.ImageScrollerComponent = Ember.Component.extend({

	width: null,
	height: null,

	widthChanges: function() {
		var width = this.get('width');
		var height = this.get('height');
		// console.log('height:'+height+'px;width:' +width+'px');
		this.set('style', 'height:'+height+'px;width:' +width+'px');
	},

	didInsertElement: function(){
		var _this = this;
		var h = window.innerHeight;
		var hh = $('.image-scroll').offset().top;
		var height = h - hh;
		var width = $('.image-scroll').parent().width();

		this.set('height', height);
		this.set('width', width);

		$(window).resize(function() {
			clearTimeout(this.id);
    		this.id = setTimeout(doneResizing, 500);
		});

		function doneResizing() {
			var w = $('.image-scroll').parent().width();
			// console.log("PLEASE W", w)
			_this.set('width', w);
			_this.widthChanges();
		}

		$(window).scroll(function() {        
	        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
	            shrinkOn = 100;
	        
	        if (distanceY > shrinkOn) {	  
	            $('.image-scroll').addClass('fixed');      
	        	doneResizing();	
	        } else {
	        	_this.set('style','');
	            $('.image-scroll').removeClass('fixed');      
	        	doneResizing();	
	        } 
	    });
	},


});