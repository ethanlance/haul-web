
import Ember from 'ember';  

export default Ember.ArrayController.extend({ 

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
