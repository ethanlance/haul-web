/* global moment */
import Ember from 'ember';

export default Ember.TextField.extend({

	valueInit: false,
	valueOut: null,
	valueIn: null,

	valueInChanged: function() {
		
		if(!Ember.isEmpty(this.get('valueIn')) && !this.get('valueInit')){
			this.$().val(this.get('valueIn'));
			this.set('valueInit', false);
		}

	}.observes('valueIn'),

	initializeMask: function() {
		var _this = this;

		var mask = this.get('mask');

		this.$().inputmask(mask, {
			"oncomplete": function(){
			
				var value = _this.$().inputmask('unmaskedvalue');
				_this.set('valueOut', value);

			}
		});
	}.on('didInsertElement'),
});