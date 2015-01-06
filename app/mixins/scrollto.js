import Ember from 'ember';
var $ = Ember.$;

export default Ember.Mixin.create({
  scrollDuration : 500, //default
  scrollTo : function(selector, offset){
  		var top = $(selector).offset().top;
  		
  		if ( offset && offset < top ){
  			top = top - offset; 
      }
  		if ( offset && offset > top ){
  			top = top - offset; 
      }

	    $('html, body').animate({
	        scrollTop: top
	    }, this.get("scrollDuration"))
	}
});