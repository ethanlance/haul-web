import Ember from 'ember';
export default Ember.Component.extend({

	/**
		Uncheck the hamburger menu icon when window resizes.
	**/
	didInsertElement: function(){

		var _this = this;

		$( window ).resize(function() {

			var id = "nav-trigger-right";

			$('#'+id).prop('checked', false);

		});
	}
});
