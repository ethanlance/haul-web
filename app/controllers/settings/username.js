import Ember from 'ember';
import config from '../../config/environment';
var Haul = config.APP;

export default Ember.ObjectController.extend({

	errorShow: false,
	errorMessage: null,
	turnOffNav:true,
	currentUserId: 'session.currentUser.id',
	
	in: function() {
		console.log("userhere", this.get('session'))
	}.observes('session.currentUser'),

	saveUsername: function() {

		var _this = this;
		var model = this.get('model');

		return model.save().then(
			function() { 
				_this.set('isProcessing', false);
				_this.set('showProduct', false);
				console.log("USERNAME SAVED", model.get('username'));
				_this.transitionToRoute('seller', model);		
			},
			function(error){
				_this.set('isProcessing', false);	
				_this.set('errorShow', true); 
				if( Haul.Server[error.status]){ 
						_this.set('errorMessage', Haul.Server[error.status]);
				}
				console.log("Error" , error);
				return error;
			}
		); 

	},	


	actions: {
		btnClick: function() {
			var _this = this;
			var model = this.get('model');
			model.set('user_id', this.get('currentUserId'));
			model.validate().then(function(){
				_this.saveUsername();	
			}, function(errors) {
				console.log('errors', errors);
				_this.set('isProcessing', false);
				_this.set('showErrors', true);
			});
		}
	}
});