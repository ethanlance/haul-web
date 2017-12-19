import Ember from 'ember';
import ErrorMixin from '../mixins/server_error';
export default Ember.ObjectController.extend({

	message: "Oh no, we were not able to load that",
	animateClose:false,
	actions: {
		
		close: function() {
			this.set('animateClose', true);
		},
	}
});