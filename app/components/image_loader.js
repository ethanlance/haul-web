import Ember from 'ember';
export default Ember.Component.extend({
	
	loaded: false,


 	
 	handleLoad: function() {
 		var _this = this;
		
		this.$().children('img').one('load', function() {
		
			Ember.run(function(){
						
				_this.set('loaded', true);

				var el = $('#'+ _this.get('unHideId'));

				el.removeClass('hide');
		
			});
		
		}.bind(this));
	
	}.on('didInsertElement')

});