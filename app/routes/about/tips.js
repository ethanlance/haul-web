import Ember from 'ember';
export default Ember.Route.extend({
	renderTemplate: function() {
		this.render('about/_nav', {
			into: 'about',
			outlet: 'nav'
		}); 
		this._super();
	}
});