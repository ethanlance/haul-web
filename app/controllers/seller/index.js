import Ember from 'ember';  

export default Ember.ObjectController.extend({
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

	getProducts: function() {
		var model = this.get('model');
		this.store.find("collection-product-list", {'collection_id':model.get('id')} )
		.then(function(records){
			model.set('products', records);
		});
	}.observes('model'),
}); 