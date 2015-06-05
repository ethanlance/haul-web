import Ember from 'ember';
export default Ember.Component.extend({

	/**
		Uncheck the hamburger menu icon when window resizes.
	**/
	didInsertElement: function(){

		var _this = this;

		$( window ).resize(function() {

			//If the window is wider than 700px then make
			//sure the hamburger hidden checkbox is unchecked.
			//otherwise the fluid column will be jacked.
			if( window.innerWidth >= 701 ){
				$('#hamburger-trigger').prop('checked', false);	
			}
		});

	}
});
