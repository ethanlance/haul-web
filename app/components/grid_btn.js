import Ember from 'ember';
/* global $ */
export default Ember.Component.extend({
	showGridView:false,
	showGridBtn:true,
	willDestroyElement: function(){
		this.set('showGridBtn', false);
	},
	actions:{
		toggleGrid: function() {
			$(window).scrollTop(0,0);
			this.set('showGridView', !this.get('showGridView'));
		}
	}
});