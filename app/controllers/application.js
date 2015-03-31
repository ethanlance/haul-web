import Ember from 'ember';
 
var ApplicationController = Ember.ObjectController.extend({
	currentUserBinding: 'session.currentUser',
}); 
export default ApplicationController;