import Ember from 'ember';

export default Ember.ObjectController.extend({

	currentUserIdBinding: 'Haul.currentUser.id',
	currentUserBinding: 'Haul.currentUser',
	isProfileOwner: true,  
	model:false,

	start: function() {
			
		
		

		if( !this.get('currentUser')){
			return;
		}



	}.on('init').observes('currentUserId'), 


}); 