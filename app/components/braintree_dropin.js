/* global braintree */

import Em from 'ember';

export default Em.Component.extend({

	currentUserBinding: "session.currentUser",

	action: 'processBraintreeNonce',

	token: null,

	//Get the buyer token from the haul api.
	makeToken: function() {

		var _this = this;
		var user_id = this.get('currentUser').id;
		var host = this.ENV.Server.PROSPER_SERVER_HOST;
		var url = host + "/buyers/" + user_id + "/tokens";
		var type = "GET";
		var bearer = this.get('currentUser').get('access_token');

		var promise = Ember.$.ajax({
			url:         url,
			type:        type,
			dataType:    'json',
			contentType: 'application/x-www-form-urlencoded',
			headers: {
				Authorization: 'Bearer ' + bearer
			},
		});

		promise.then(
			function success(result) {
				console.log("TOKEN", result);
				_this.set('token', result.data.value);
			},
			function failed(error){
				console.log("ERROR", error);
			}
		);

	}.on('didInsertElement'),

	_setup: function() {

		var token = this.get('token');
console.log('toKen', token);
		if( Ember.isEmpty( token ) ){
			return;
		}

		var handler = Em.run.bind(this, this._handler);
				

		braintree.setup(token, 'dropin', {
			container: this.elementId,
			paymentMethodNonceReceived: handler
		});
	}.observes('token'),

	_handler: function(event, nonce) {
		this.sendAction('action', nonce);
		return false;
	}
});