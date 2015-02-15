import Ember from 'ember';
export default Ember.Mixin.create({
	activate: function() {
		this._super();
		console.log("add class anon")
		Ember.$('body').addClass('anon');
	},
	deactivate: function() { 
		this._super();
		console.log("remove class anon")
		Ember.$('body').removeClass('anon');
	}
});