import Ember from 'ember';
 
var ApplicationController = Ember.ObjectController.extend({
	currentUserBinding: 'session.currentUser',

	start: function() {
		console.log("FAST?CLICK?")
		$(function() {
		    FastClick.attach(document.body);
		});
	}.on('init'),
}); 
export default ApplicationController;