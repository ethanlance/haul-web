import Ember from 'ember';
import ScrollableMixin from '../mixins/scrollable';
/* global $ */
export default Ember.Component.extend(ScrollableMixin,{
	galleryView:false,
	renderIsDone:false,
	didInsertElement: function(){
		var _this = this;
		Ember.run.later(function(){
			_this.set('renderIsDone', true);	
		}, 500);
		
		this._super();
	},
	willDestroyElement: function(){
		this.set('renderIsDone', false);
	},
	actions:{
		toggleGrid: function() {
			$(window).scrollTop(0,0);
			this.set('galleryView', !this.get('galleryView'));
			this.sendAction('galleryView', true);
		}
	}
});