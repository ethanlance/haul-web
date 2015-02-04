import Ember from 'ember';
export default Ember.View.extend({
	didRender: false,
	templateName: 'seller/feed',

    willAnimateIn : function () { 
    	this.set('didRender', true);
    	this.$().addClass('view-slide');
  		this.$().css({'position':'absolute', 'width':'100%', 'left':'-1000px'});
    },

    animateIn : function (done) { 
    	console.log("SLIDE FEED IN"); 
    	var _this = this;

    	Ember.run.next(function(){
    		_this.$().css({ left: '0' });
        	Ember.run.later(done, 500);	
        });
    },

    animateOut : function (done) {
		var _this = this;
		
		Ember.run.next(function(){
			console.log("SLIDE FEED OUT"); 
             _this.$().css({ left: '-100px' });
             Ember.run.later(done, 2000);
        });
		
    }
});