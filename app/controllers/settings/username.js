import Ember from 'ember';
import config from '../../config/environment';
var Haul = config.APP;

export default Ember.ObjectController.extend({
	errorShow: false,
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
				if( Haul.Server[error.status]){ 
					_this.set('errorMessage', Haul.Server[error.status]);
				}
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