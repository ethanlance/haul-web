import Ember from 'ember';
import config from '../config/environment';
var Config = config.APP;

//Forgot Password Confirm: Form to change a user password w/ ticket_id (token)
export default Ember.ObjectController.extend({
	
	needs: ['login'],
	client_token: Config.Server.CLIENT_TOKEN,
	host: Config.Server.USER_SERVER_HOST,


	queryParams: ['ticket_id', 'user_id'],

	//Template Keys
	ticket_id: null,
	user_id: null,
	isProcessing: false, 
	error: false,
	showSuccess:false,

	reset: function() {
		this.set('error', false); 
	},

	actions: {

		focus: function() {
			this.reset();
		},

		submit: function() {
			var _this = this;

			this.set('isProcessing', true);

			var data = this.getProperties('password');
			var url = _this.get('host') + '/users/' + this.get('user_id') + "/tickets/" + this.get('ticket_id');

			return Ember.$.ajax({
					url: url,
					type: 'PUT',
					data: data,
					headers: {
						Authorization: 'Bearer ' + _this.get('client_token')
					},
					dataType: 'json'
			})
			.then(
				function(response) {
					_this.set('showSuccess', true);
				}, 
				function() {
					_this.set('isProcessing', false);
					_this.set('error', true);
				}
			);
		}
	}
});