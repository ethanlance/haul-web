import Ember from 'ember';
export default Ember.Component.extend({
	
	wait: 1000,

	loaded: false,

	showImage: function() {
		this.set('loaded', true);

		var el = $('#'+ this.get('unHideId'));

		el.removeClass('hide');
	},
 	
 	handleLoad: function() {
 		var _this = this;
		

		//When the image loads send out an alert.
		this.$().children('img').one('load', function() {
		
			Ember.run(function(){
				_this.showImage();
			});
		
		}.bind(this));
	

		//Regardless of if the image loads, after X milliseconds 
		//send out an alert.
		Ember.run.later(function(){
			_this.showImage();
		}, this.get('wait'));

	}.on('didInsertElement')

});