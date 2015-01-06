
import Ember from 'ember'; 
import auth from '../auth'; 

export default Ember.ArrayController.extend({
	needs: ["auth"], 
	currentUser: Ember.computed.alias('controllers.auth.currentUser'),

	//This array controller sorts it's images
	sortProperties: ['id'],
	sortAscending: false,

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
	}.observes('model'),
}); 
