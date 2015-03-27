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

		Ember.$(document).on('keyup', Ember.run.bind(this, this.esc_close));
	},

	willDestroyElement: function() {
		Ember.$(document).off('keyup');//, Ember.run.bind(this, this.esc_close));	
	},

	esc_close: function(e){ 
	    if(e.which == 27){
	    	this.set('animateClose', true);
			this.closeTripped();
	    }
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