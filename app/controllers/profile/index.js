import Ember from 'ember';  

export default Ember.ArrayController.extend({
	
 	needs: ['profile'],
 	thisPage: "feedPage", 
 	hasPosts: false,
 	user: false,
	currentUserIdBinding: 'Haul.currentUser.id',
	isProfileOwner: false, 
	isFeedPage:true,
	currentPos:'3000px',
	showGridViewBinding: 'controllers.profile.showGridView',
	showGridBtn:true,

 	currentPageBinding: 'controllers.profile.currentPage',
 	showHeaderChange: function(){  
 		if( this.get('currentPage') === this.get('thisPage')){
 			this.set('controllers.profile.showGridBtn', this.get('showGridBtn'));
 			this.get('controllers.profile').set('showHeader', true);	
 		} 		
 	}.observes('currentPage'),

	modelChange: function() {

		this.set('controllers.profile.showGridBtn', this.get('showGridBtn'));

		if(!Ember.isEmpty(this.get('model'))){
			this.set('hasPosts', true);
		}else{
			this.set('hasPosts', false);
		}
		this.showHeaderChange();
	}.observes('model'),

	isProfileOwnerChanged: function() {
		this.set('isProfileOwner', false); 
		if( this.get('session').isAuthenticated && !Ember.isEmpty(this.get('currentUserId')) ) {
			if (this.get('user').get('id') === this.get('currentUserId')) {
				this.set('isProfileOwner', true);
			}
		} 
	}.observes('user', 'currentUserId')
}); 