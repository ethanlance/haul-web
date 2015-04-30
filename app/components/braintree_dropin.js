/* global braintree */

import Em from 'ember';

export default Em.Component.extend({

	currentUserBinding: "session.currentUser",

	action: 'processBraintreeNonce',

	token: null,

	//Get the buyer token from the haul api.
	makeToken: function() {

		//buyerId must exist for us to continue
		if(!this.get('buyerId')) {
			return;
		}

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

	}.observes('buyerId'),

	_setup: function() {

		var token = this.get('token');

		if( Ember.isEmpty( token ) ){
			return;
		}

		var handler = Em.run.bind(this, this._handler);
				console.log("ELEMENR?", this.elementId);

		braintree.setup(token, 'dropin', {
			container: this.elementId,
			paymentMethodNonceReceived: handler
		});

	}.observes('token'),

	_handler: function(event, nonce) {

		console.log("HANDLER", nonce);

		this.sendAction('payment_nonce', nonce);

		//


		return false;
	}
});