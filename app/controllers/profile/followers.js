import Ember from 'ember';   

export default Ember.ObjectController.extend({ 

 	needs: ['profile'],
 	thisPage: "followersPage", 
 	currentPageBinding: Ember.computed.alias('controllers.profile.currentPage'),
 	showHeaderChange: function(){  
 		if( this.get('currentPage') === this.get('thisPage')){
 			this.get('controllers.profile').set('showHeader', true);	
 		} 		
 	}.observes('currentPage'),


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