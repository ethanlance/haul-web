import Ember from 'ember';
import config from '../../config/environment';
var Haul = config.APP;

export default Ember.ObjectController.extend({
	showErrorMessage: false,
	errorMessage: null,

	turnOffNav:true,
	currentUserId: 'session.currentUser.id',

	saveUsername: function() {

		var _this = this;
		var model = this.get('model');
		var username = model.get('username');
		model.set('user_id', this.get('currentUserId'));

		model.validate()
		.then(function(){
			return model.save();
		})
		.then(function(){
			_this.set('session.currentUser.username', username);
		})
		.then(
			function() { 
				_this.set('isProcessing', false);
				console.log("USERNAME SAVED", username);
				_this.transitionToRoute('profile', username);		
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