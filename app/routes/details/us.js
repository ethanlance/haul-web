import Ember from 'ember';
export default Ember.Route.extend({

	metaTitle: function() {
		return "About Haul";
	}.property(),	

	renderTemplate: function() {
		this.render('details/_nav', {
			into: 'details',
			outlet: 'nav'
		}); 
		this._super();
	}
});