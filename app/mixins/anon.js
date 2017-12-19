import Ember from 'ember';
export default Ember.Mixin.create({
	activate: function() {
		this._super();
		Ember.$('body').addClass('anon');
	},
	deactivate: function() { 
		this._super();
		Ember.$('body').removeClass('anon');
	}
});