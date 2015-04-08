import Ember from 'ember';
import openmodalMixin from '../mixins/openmodal';
export default Ember.Component.extend(openmodalMixin, {	 
	showHeader:true,
	toggle: false,
	actions: {
		toggle: function() {
			this.set('toggle', !this.get('toggle'));
		}, 
	}
});