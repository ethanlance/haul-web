import Ember from 'ember';  

export default Ember.ObjectController.extend({
	currentUserIdBinding: 'Haul.currentUser.id',
	collection: null,
	user: null, 
	hasProducts: false,
	hasCollections: false,
	isProfileOwner: false,

	isProfileOwnerChanged: function() {

		this.set('isProfileOwner', false);
		this.set('hasProducts', false);
		this.set('hasCollections', false);

		if( this.get('session').isAuthenticated ) {
			if (this.get('user').id === this.currentUserId) {
				this.set('isProfileOwner', true);
			}
		}

		var _this = this;
		//Find the sellers collections.  Then find the follower list for the first collection.
		this.store.find('user-collection', {user_id:this.user.id}).then(function(result) {
			_this.set('hasCollections', result);
		});
		
		this.store.find('product-list', {user_id: this.user.id}).then(function(result) {
			_this.set('hasProducts', result);
		});

	}.observes('model'),
}); 