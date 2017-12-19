import Ember from 'ember';
export default Ember.Component.extend({

	/**
		Uncheck the hamburger menu icon
	**/
	didInsertElement: function(){
		$('#hamburger-trigger').prop('checked', false);	
	}
});
