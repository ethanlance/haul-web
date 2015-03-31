import Ember from 'ember';

var NotAuthorizedController = Ember.ObjectController.extend({
	currentUserBinding: 'session.currentUser',
}); 
export default NotAuthorizedController;