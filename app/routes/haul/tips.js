import Ember from 'ember';
export default Ember.Route.extend({
	renderTemplate: function() {
		this.render('haul/_nav', {
			into: 'haul',
			outlet: 'nav'
		}); 
		this._super();
	}
});