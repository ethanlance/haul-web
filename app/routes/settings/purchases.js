import Ember from 'ember';
export default Ember.Route.extend({

	metaTitle: function() {
		return "Your Purchases";
	}.property(),	

	renderTemplate: function() {
		this.render('settings/_nav', {
			into: 'settings',
			outlet: 'nav'
		}); 
		this._super();
	}
});