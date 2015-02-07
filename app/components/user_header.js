import Ember from 'ember';

export default Ember.Component.extend({	 

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