import Ember from 'ember';   

export default  Ember.ObjectController.extend({ 

 	needs: ['profile'],
 	thisPage: "likesPage", 
 	user: false,
 	content:false,
 	hasPosts:false,

 	currentPageBinding: Ember.computed.alias('controllers.profile.currentPage'),
 	showHeaderChange: function(){ 
 		if( this.get('currentPage') === this.get('thisPage')){
 			this.get('controllers.profile').set('showHeader', true);	
 		} 		
 	}.observes('currentPage'),

	currentUserIdBinding: 'Haul.currentUser.id',
	userIdBinding: 'model.user.id',
	isProfileOwner: false,

	modelChange: function() {
		if(!Ember.isEmpty(this.get('model'))){
			this.set('hasPosts', true);
		}else{
			this.set('hasPosts', false);
		}

		var _this = this;
		var content = this.store.filter('user-likes-list', function(userLike){
			if(userLike.get('user').get('id') === _this.get('user').get('id')){
				console.log("YEP!")
				return userLike;
			}
		});
		this.set('content', content);

	}.observes('model'),

	isProfileOwnerChanged: function() {

		this.set('isProfileOwner', false); 
		if( this.get('session').isAuthenticated && !Ember.isEmpty(this.get('currentUserId')) ) {
			if (this.get('user').get('id') === this.get('currentUserId')) {
				this.set('isProfileOwner', true);
			}
		} 
	}.observes('user', 'currentUserId'),

});