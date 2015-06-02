import Ember from 'ember';
import FollowMixin from '../mixins/follow';
export default Ember.ObjectController.extend( FollowMixin, {
	
	showErrorMessage: false,
	
	errorMessage: null,

	turnOffNav:true,

	currentUserIdBinding: 'session.currentUser.id',

	saveUsername: function() {

		var _this = this;
		var model = this.get('model');
		var username = model.get('username');
		model.set('user_id', this.get('currentUserId'));

		model.validate()
		.then(function(){
			return model.save();
		})

		//Set the username on the user's session.
		.then(function(){
			_this.set('session.currentUser.username', username);
		})

		//Now have this user automatically follow Haul.
		.then(function() {
			//Follow Mixin
			//Now have this user follow @haul
			_this.setFollowByUsername('haul');
		})

		.then(
			function() { 
				_this.set('isProcessing', false);
				_this.transitionToRoute('discover');		
			},
			function(error){
				_this.set('isProcessing', false);	
				_this.set('showErrors', true);
				if(error.status === 400){ 
					_this.set('errorMessage', "Oops, usernames must be <ul><li>at least 3 characters long</li><li>must start with a letter</li><li>cannot have spaces</li><li>and can only contain letters and numbers</li></ul>");
				}else if(error.status === 409){ 
					_this.set('errorMessage', "Sorry, username unavailable.");
				}else{
					_this.set('errorMessage', "Uhoh, there was an error.");
				}
				_this.set('showErrorMessage', true);
				console.log("Error" , error);
			}
		);
	},

	actions: {
		btnClick: function() {
			this.saveUsername();
		}
	}
});