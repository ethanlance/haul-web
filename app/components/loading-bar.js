import Ember from 'ember';
export default Ember.Component.extend({

	delay: 30,

	spread: 2,

	turnLoadingBarOn: false,

	didInsertElement: function() {
		this.progressTheBar();
	}.observes('turnLoadingBarOn'),

	progressTheBar: function() {
		var _this = this;

		var el = $('.progress-bar')[0];

		var w = parseInt($(el).attr("aria-valuenow"));
		
		if( w >= 100) {
			w = 0;
		}

		w = w + _this.get('spread');



		if( !_this.get('turnLoadingBarOn') ) {

			$(el).css('width', '0%').attr("aria-valuenow", 0); 

			return;
		}else{

			$(el).css('width', w+'%').attr("aria-valuenow", w); 

			Ember.run.later(function() {
				_this.progressTheBar();
			}, _this.get('delay'));

		}
	}

});