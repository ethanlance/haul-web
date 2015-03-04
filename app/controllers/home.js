import Ember from 'ember';

export default Ember.ObjectController.extend({

	currentUserIdBinding: 'Haul.currentUser.id',
	currentUserBinding: 'Haul.currentUser',
	isProfileOwner: true,  
	model:false,

	modelChange: function() {
		if(!Ember.isEmpty(this.get('model'))){
			this.set('hasPosts', true);
		}else{
			this.set('hasPosts', false);
		}
		
	}.observes('model'),

	start: function() {
		


		if( this.get('currentUserId') ){
			
			var _this = this;
			this.store.find('feed', {user_id:this.get('currentUserId')}).
			then(function(feed){
				_this.set('model', feed);
			});

			
		}

		
	}.on('init').observes('currentUserId'), 


}); 