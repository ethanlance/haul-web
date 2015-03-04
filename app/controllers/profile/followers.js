import Ember from 'ember';   

export default Ember.ObjectController.extend({ 

 	needs: ['profile'],
 	thisPage: "followersPage", 
 	user: false,
 	currentPageBinding: 'controllers.profile.currentPage',
 	showGridBtn:false,

 	
 	showHeaderChange: function(){  
 		if( this.get('currentPage') === this.get('thisPage')){
 			this.set('controllers.profile.showGridBtn', this.get('showGridBtn'));
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
			if (this.get('user').get('id') === this.get('currentUserId')) {
				this.set('isProfileOwner', true);
			}
		} 
	}.observes('user', 'currentUserId')
});