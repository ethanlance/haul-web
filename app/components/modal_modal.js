import Ember from 'ember'; 
export default Ember.Component.extend({	 
	showModal: false,
	animateClose: false,
	didInsertElement: function(){   
		this.set('animateClose', false);
		var _this = this;
		Ember.run.later(function(){ 
			_this.set('showModal', true);
		}, 100);
	},

	closeTripped: function() {
		if(!this.get('animateClose')){
			return;
		}
		var _this = this;  
		_this.set('showModal', false);
		return Ember.run.later(function(){ 
			_this.sendAction('closeModal');
		},500); 
	}.observes('animateClose')
});