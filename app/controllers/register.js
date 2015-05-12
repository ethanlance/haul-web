import Ember from 'ember';
import config from '../config/environment';
import ErrorMixin from '../mixins/server_error';
var Config = config.APP;

export default Ember.ObjectController.extend(ErrorMixin,{

	needs: ['login'],

	client_token: Config.Server.CLIENT_TOKEN,
	host: Config.Server.USER_SERVER_HOST,

	queryParams: ['ticket_id', 'user_id'],

	//Template Keys
	ticket_id: null,
	user_id: null,
	isProcessing: false, 
	showErrors: false,
	error: false,

	reset: function() {
		this.set('error', false); 
		this.set('isProcessing', false);
	},

	confirmSignup: function(data) {
		var _this = this;
		this.set('isProcessing', true);
		var url = '/users/' + this.get('user_id') + "/tickets/" + this.get('ticket_id');

		return _this.get('controllers.login').authenticate(url, 'put', data)
		.then(null, function(error) {
			_this.set('isProcessing', false);
			_this.set('error', true); 
			_this.handleServerError(error);
		});
	},


	actions: {
		focus: function() {
			this.reset();
		},

		//LOGIN via email, password
		submit: function() {
			this.set('isProcessing', true);
			var _this = this;
			var model = this.get('model');
			var data = this.getProperties('firstname', 'lastname', 'password');

	 		//Model Validations:
			model.validate().then(function(){
				_this.confirmSignup(data);	
			}, function(errors) {
				_this.set('isProcessing', false);
				_this.set('showErrors', true); 
			});
	 	}
	}
});
