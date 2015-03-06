import Ember from 'ember';
import config from '../config/environment';
var Config = config.APP;

export default Ember.ObjectController.extend({

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
 
		//Pass params email/password to it.

		

		// return  _this.get('session').authenticate('authenticator:custom',
		// 		{
		// 			type:'PUT',
		// 			url: url,
		// 			host: _this.get('host'),
		// 			data: data,
		// 		})


		// return Ember.$.ajax({
		// 		url: this.get('host') + '/users/' + this.get('user_id') + "/tickets/" + this.get('ticket_id'),
		// 		type: 'put',
		// 		data: data,
		// 		headers: {
		// 			Authorization: 'Bearer ' + this.get('client_token')
		// 		},
		// 		dataType: 'json'
		// })
	
		var url = '/users/' + this.get('user_id') + "/tickets/" + this.get('ticket_id');

		return _this.get('controllers.login').authenticate(url, 'put', data)
		.then(
			function(response) {
				return _this.get('controllers.login').startUserSession(response);
			}
		).then(null, function(error) {
			console.log("Error submit confirm", error);
			_this.set('isProcessing', false);
			_this.set('error', true); 
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
			}, function() {
				_this.set('isProcessing', false);
				_this.set('showErrors', true);
			});
	 	}
	}
});
