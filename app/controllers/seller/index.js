
import Ember from 'ember'; 
import auth from '../auth'; 

//SHOW all user's products
var SellerIndexController = Ember.ObjectController.extend({
	needs: ["auth"], 
	currentUser: Ember.computed.alias('controllers.auth.currentUser'),
	user: null,

	hasProducts: false,
	hasCollections: false,

	// //Is currentUser viewing his own page?
	isProfileOwner: false,
	isProfileOwnerChanged: function() {

		var currentUser = this.get('currentUser');
		if( currentUser ){
			if(!Ember.isEmpty(currentUser) && this.get('id') === currentUser.get('id') ) {
				this.set('isProfileOwner', true);
			}else{
				this.set('isProfileOwner', false);
			}
		} 

		var _this = this;
		_this.set('hasProducts', false);
		_this.set('hasCollections', false);
	
		//Find the sellers collections.  Then find the follower list for the first collection.
		this.store.find('user-collection', {user_id:this.user.id}).then(function(result) {
			_this.set('hasCollections', result);
		});
		
		this.store.find('product-list', {user_id: this.user.id}).then(function(result) {
			_this.set('hasProducts', result);
		});


	}.observes('model'),

}); 
export default SellerIndexController;