import Ember from 'ember';
	
export default Ember.ObjectController.extend({
	currentUserBinding: 'session.currentUser',
	currentUserIdBinding: 'session.currentUser.id',
	user: null,
	navColumnOpen: false,

	


	setup: function() { 
		var _this = this;
		this.store.find('user', this.get('currentUser').get('id')).then(function(user){
			_this.set('user', user);
		});
	}.observes('currentUser'),


}); 