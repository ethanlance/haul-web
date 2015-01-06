
import Ember from 'ember';
import auth from '../auth'; 


var SellerFollowsController = Ember.ObjectController.extend({
	needs: ["auth"], 
	currentUser: Ember.computed.alias('controllers.auth.currentUser'),
	user: null,

	// //Is currentUser viewing his own page?
	isProfileOwner: false,
	isProfileOwnerChanged: function() {
		var currentUser = this.get('currentUser');
		if( currentUser ){
			if(!Ember.isEmpty(currentUser) && this.user.get('id') === currentUser.get('id') ) {
				this.set('isProfileOwner', true);
			}else{
				this.set('isProfileOwner', false);
			}
		} 

		console.log("MODEL", this.get('model'));

	}.observes('model'),

}); 
export default SellerFollowsController;