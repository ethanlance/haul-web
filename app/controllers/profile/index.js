import Ember from 'ember';  

export default Ember.ArrayController.extend({
	
 	needs: ['profile'],
 	user: null,
 	//model: {},
 	thisPage: "feedPage", 
 	currentPageBinding: Ember.computed.alias('controllers.profile.currentPage'),
 	showHeaderChange: function(){  
 		if( this.get('currentPage') === this.get('thisPage')){
 			this.get('controllers.profile').set('showHeader', true);	
 		} 		
 	}.observes('currentPage'),


 	
	currentUserIdBinding: 'Haul.currentUser.id',
	userIdBinding: 'model.id',
	isProfileOwner: false, 
	isFeedPage:true,
	currentPos:'3000px',

	isProfileOwnerChanged: function() {
		this.set('isProfileOwner', false); 
		if( this.get('session').isAuthenticated && !Ember.isEmpty(this.get('currentUserId')) ) {
			if (this.get('userId') === this.get('currentUserId')) {
				this.set('isProfileOwner', true);
			}
		} 
	}.observes('userId', 'currentUserId'),

	// getProducts: function() {
	// 	var model = this.get('model');
	// 	this.store.find("collection-product-list", {'collection_id':model.get('id')} )
	// 	.then(function(records){
	// 		model.set('products', records);
	// 	});
	// }.observes('model')
}); 