import Ember from 'ember';
export default Ember.Mixin.create({
	
	serverErrorMessage: false,
	serverErrorMessageShow: "",

	serverErrorMessageChanged: function() {
		if(!Ember.isEmpty(this.get('serverErrorMessage'))){
			this.set('serverErrorMessageShow', true);
		}else{
			this.set('serverErrorMessageShow', false);
		}
	}.observes('serverErrorMessage'),

	resetServerError: function() {
		this.set('serverErrorMessage', ""); 
	},

	handleServerError: function( error ) {
		

		// if( !error.hasOwnProperty('status')) {
		// 	return;
		// }
		
		var message;
		if( error.hasOwnProperty('status') && this.ENV.errorMessages[error.status] ){
			message = this.ENV.errorMessages[error.status];
		}else if( error.message ){
			message = error.message;
		}else{
			message = this.ENV.errorMessages[400];
		}

		if( error.hasOwnProperty('responseText')) {
			var obj = JSON.parse(error.responseText);
			message = message + "<p>" + obj.message + "</p>";
		}



		this.set('serverErrorMessage', message); 
	},

	actions: {
		closeServerError: function() {
			this.resetServerError();
		}
	}
});