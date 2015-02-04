import Ember from 'ember';
export default Ember.Component.extend({
	galleryView:false,
	renderIsDone:false,
	didInsertElement: function(){
		var _this = this;
		Ember.run.later(function(){
			console.log("TURN TIS ON")
			_this.set('renderIsDone', true);	
		}, 500);
		
		this._super();
		console.log("HERE?:)")
	},
	willDestroyElement: function(){
		this.set('renderIsDone', false);
	},
	actions:{
		toggleGrid: function() {
			this.set('galleryView', !this.get('galleryView'));
		}
	}
});