
import Ember from 'ember';

/* global Ladda */

var LaddaBtnComponent = Ember.Component.extend({

	laddaBtn: null,

	btnClickObj: null,

	spin: false,

	dataSpinnerColor: 'black',

	elementId: null,

	btnClasses: null,

	spinChanged: function() {
		if( this.spin ){
			this.laddaBtn.start();
		}else{
			this.laddaBtn.stop();
		}
	}.observes('spin'),

	enable: function(){
		this.laddaBtn = Ladda.create( this.get('element').firstChild );
	}.on('didInsertElement'),

	actions: {
		btnClick: function(event) { 
			this.set('spin', true);
			this.sendAction('btnClick', event);
		}
	}
});
export default LaddaBtnComponent;