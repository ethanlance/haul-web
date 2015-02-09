import Ember from 'ember'; 
/*global $*/
export default Ember.Component.extend({	 
	didInsertElement: function(){  
		$('.modal').addClass('in');
	}
});