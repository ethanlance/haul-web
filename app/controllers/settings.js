import Ember from 'ember';
	
export default Ember.ObjectController.extend({
	currentUserBinding: 'Haul.currentUser',
	currentUserIdBinding: 'Haul.currentUser.id',
	user: null,
	navColumnOpen: false,
	setup: function() { 
		var _this = this;
		this.store.find('user', this.get('currentUser').get('id')).then(function(user){
			_this.set('user', user);
		});
	}.observes('currentUser'),

	actions: {
		toggleNavColumn: function() {
			this.set('navColumnOpen', !this.get('navColumnOpen'));
		},

		closeNavColumn: function() {
			this.set('navColumnOpen', false);
		}
	}
}); 