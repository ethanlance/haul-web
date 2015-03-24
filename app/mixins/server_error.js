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
		console.log("Error", error);

		if( !error.hasOwnProperty('status')) {
			return;
		}
		
		var message;
		if( this.ENV.errorMessages[error.status] ){
			message = this.ENV.errorMessages[error.status];
		}else{
			message = this.ENV.errorMessages[400];
		}

		var obj = JSON.parse(error.responseText);
		message = message + "<p>" + obj.message + "</p>";

		this.set('serverErrorMessage', message); 
	},

	actions: {
		closeServerError: function() {
			this.resetServerError();
		}
	}
});