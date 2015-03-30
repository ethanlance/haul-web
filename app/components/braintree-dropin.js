/**
  https://developers.braintreepayments.com/javascript+node/start/hello-client
**/

import Ember from 'ember';

export default Ember.Component.extend({
  action: 'processBraintreeNonce',
  token: null,

  _setup: function() {
    var handler = Em.run.bind(this, this._handler),
        token = this.get('token');
console.log("TOKEN", token);
    braintree.setup(token, 'dropin', {
      container: 'dropin',
      paymentMethodNonceReceived: handler
    });
  }.on('didInsertElement'),

  _handler: function(event, nonce) {
    this.sendAction('action', nonce);
    return false;
  }
});