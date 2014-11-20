Haul.ScrollToMixin = Ember.Mixin.create({
  scrollDuration : 500, //default
  scrollTo : function(selector){
	    $('html, body').animate({
	        scrollTop: $(selector).offset().top
	    }, this.get("scrollDuration"))
	}
});