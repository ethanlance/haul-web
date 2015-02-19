import Ember from 'ember';
import openmodalMixin from '../mixins/openmodal';
export default Ember.Component.extend(openmodalMixin, {	 

	showHeader:true, 

	actions: {
		clickBack: function() {
			if( this.get('fixedView') ){
				var fixedView = this.get('fixedView');
				fixedView.addClass('hide');
			}

		}
	}
});