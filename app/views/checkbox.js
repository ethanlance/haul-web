import Ember from 'ember';
/*global $*/
export default Ember.Checkbox.extend({

	hookup: function(){
		var action = this.get('action');
		if(action){
	  		this.on('change', this, this.sendHookup);
		}
  	}.on('init'),
  
  	sendHookup: function(ev){
		var action = this.get('action'),
		controller = this.get('controller');
	 	controller.send(action,  this.$().prop('checked'));
  	},
  	
  	cleanup: function(){
		this.off('change', this, this.sendHookup);
  	}.on('willDestroyElement')
  	
});