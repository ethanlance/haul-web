import Ember from 'ember';
	
export default Ember.ObjectController.extend({
	currentUserBinding: 'Haul.currentUser',
	currentUserIdBinding: 'Haul.currentUser.id',
	user: null,
	setup: function() { 
		var _this = this;
		this.store.find('user', this.get('currentUser').get('id')).then(function(user){
			_this.set('user', user);
		});
	}.observes('currentUser')
}); 