import Ember from 'ember';
import config from '../config/environment';
var Config = config.APP;

export default  Ember.ObjectController.extend({
	client_token: Config.Server.CLIENT_TOKEN,
	host: Config.Server.USER_SERVER_HOST,

	//queryParams: ['email'],
	email: null,
	
	emailSent: false,
	isProcessing: false, 
	error: false,
	error409: false, 

	reset: function() {
		this.set('error', false);
		this.set('error409', false); 
		this.set('emailSent', false);
		this.set('email', null);
	},

	actions: {
		focus: function() {
			this.reset();
		},

		submit: function() { 
			var _this = this;
			var data = this.getProperties('email');
			data['action'] = 'password-reset';


			//AJAX CALL - for getting the User Token back.  
			//Pass params email/password to it.
			return Ember.$.ajax({
					url: _this.get('host') + '/users/email',
					type: 'post',
					data: data,
					headers: {
						Authorization: 'Bearer client_' + _this.get('client_token')
					},
					dataType: 'json'
			}).then(
				function() { 
					_this.set('isProcessing', false); 
					_this.set('emailSent', true); 
				}, 

				function(error) {
						
					_this.set('isProcessing', false);

					if( error.status === 409 ){
						_this.set('error409', true);
					}else {
						_this.set('error', true);
					} 
				}
			);
		}
	}
});