import Ember from 'ember';
export default Ember.ArrayController.extend({
	queryParams:['q','type'],
	q: null,
	type: null,

	queryChanged: function() {
		console.log("SEARCH FOR ", this.get('q'));
	}.observes('q', 'type'),

	// actions:{
	// 	goToRoute: function(arg1, arg2) {
	// 		console.log("INTERCEPTED at search")
	// 		this.transitionToRoute(arg1, arg2);
	// 	}
	// }
});