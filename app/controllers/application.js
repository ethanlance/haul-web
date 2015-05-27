import Ember from 'ember';
 
var ApplicationController = Ember.ObjectController.extend({
	currentUserBinding: 'session.currentUser',
	doLoading: false,
	start: function() {
		$(function() {
		    FastClick.attach(document.body);
		});
	}.on('init'),
}); 
export default ApplicationController;