import Ember from 'ember';   

export default Ember.ObjectController.extend({ 
	currentUserIdBinding: 'Haul.currentUser.id',
	collectionIdBinding: 'model.id',
	userIdBinding: 'model.user.id',
	isProfileOwner: false,

	isProfileOwnerChanged: function() {
		this.set('isProfileOwner', false); 
		if( this.get('session').isAuthenticated && !Ember.isEmpty(this.get('currentUserId')) ) {
			if (this.get('userId') === this.get('currentUserId')) {
				this.set('isProfileOwner', true);
			}
		} 
	}.observes('userId', 'currentUserId')
});