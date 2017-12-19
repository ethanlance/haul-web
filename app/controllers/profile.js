import Ember from 'ember';  
export default Ember.ObjectController.extend({
	
	currentUserIdBinding: 'session.currentUser.id',
	
	isProfileOwnerChanged: function() {
		this.set('isProfileOwner', false); 
		if( this.get('session').isAuthenticated && !Ember.isEmpty(this.get('currentUserId')) ) {
			if (this.get('model').get('id') === this.get('currentUserId')) {
				this.set('isProfileOwner', true);
			}
		} 
	}.observes('model', 'currentUserId'),

});