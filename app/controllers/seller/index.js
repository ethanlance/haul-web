import Ember from 'ember';  

export default Ember.ObjectController.extend({
	
 	needs: ['seller'],
 	thisPage: "feedPage", 
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
	isFeedPage:true,
	currentPos:'3000px',

	currentPosChanged: function() {
		console.log("POSITION HAS CHANGED", this.get('currentPos'))
	}.observes('currentPos'),

	isProfileOwnerChanged: function() {
		this.set('isProfileOwner', false); 
		if( this.get('session').isAuthenticated && !Ember.isEmpty(this.get('currentUserId')) ) {
			if (this.get('userId') === this.get('currentUserId')) {
				this.set('isProfileOwner', true);
			}
		} 
	}.observes('userId', 'currentUserId'),

	getProducts: function() {
		var model = this.get('model');
		this.store.find("collection-product-list", {'collection_id':model.get('id')} )
		.then(function(records){
			model.set('products', records);
		});
	}.observes('model')
}); 