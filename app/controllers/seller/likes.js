import Ember from 'ember';   

export default  Ember.ObjectController.extend({ 

 	needs: ['seller'],
 	thisPage: "likesPage", 
 	currentPageBinding: Ember.computed.alias('controllers.seller.currentPage'),
 	showHeaderChange: function(){  
 		console.log("CURRENTPAGE IS", this.get('currentPage')) 
 		if( this.get('currentPage') === this.get('thisPage')){
 			console.log(this.get('currentPage') +" === " +this.get('thisPage'))
 			this.get('controllers.seller').set('showHeader', true);	
 		} 		
 	}.observes('currentPage'),

	currentUserIdBinding: 'Haul.currentUser.id',
	userIdBinding: 'model.user.id',
	isProfileOwner: false,

	isProfileOwnerChanged: function() {

		this.set('isProfileOwner', false); 
		if( this.get('session').isAuthenticated && !Ember.isEmpty(this.get('currentUserId')) ) {
			if (this.get('userId') === this.get('currentUserId')) {
				this.set('isProfileOwner', true);
			}
		} 
	}.observes('userId', 'currentUserId'),

});