import Ember from 'ember';
export default Ember.Route.extend({
	
	metaTitle: function() {
		return "Haul Tips";
	}.property(),	

	renderTemplate: function() {
		this.render('about/_nav', {
			into: 'about',
			outlet: 'nav'
		}); 
		this._super();
	}
});