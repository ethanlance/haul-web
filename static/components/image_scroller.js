// Haul.ImageScrollerComponent = Ember.Component.extend( Haul.Scrolling, Haul.Resizing, {

// 	width: null,
// 	height: null,

// 	scrolled: function() {

// 		var distanceY = $('.image-scroll').scrollTop();
// 		var navbar  = $('.haul-navbar');
//         var toolbar = $('.toolbar');    
//         var h = navbar.height() + toolbar.height();
//         console.log(distanceY + " " + h)
//         if (distanceY > h) {	  
//             $('.image-scroll').addClass('fixed');      
//         	this.resized();	
//         } else {
//         	this.set('style','');
//             $('.image-scroll').removeClass('fixed');      
//         	this.resized();	
//         } 
// 	},

// 	resized: function() {
// 		var w = $('.image-scroll').parent().width();
// 		this.set('width', w);
// 		var width = this.get('width');
// 		var height = this.get('height');
// 		this.set('style', 'height:'+height+'px;width:' +width+'px');
//     },

// 	willDestroyElement: function() {
//         this.unbindResizing();
// 		this.unbindScrolling();
//     },

// 	didInsertElement: function(){

// 		var _this = this; 
// 		var height = window.innerHeight - $('.image-scroll').offset().top; 
// 		var width = $('.image-scroll').parent().width();

// 		this.set('height', height);
// 		this.set('width', width);

// 		this.bindResizing();
// 		this.bindScrolling();
// 	}
// });