import Ember from 'ember'; 

export default Ember.ObjectController.extend({ 
 
	isCollectionOwner: false, 
	hasCollections: "collections.collections", 
	currentUserIdBinding: 'Haul.currentUser.id',
	ownerIdBinding: 'model.collection.user.id',

	setup: function() {  
		this.set('isCollectionOwner', false);

		if( this.get('session').isAuthenticated ) {
			if( this.ownerId === this.currentUserId) {
				this.set('isCollectionOwner', true);
			}	 
		}
		
	}.observes('model')
});