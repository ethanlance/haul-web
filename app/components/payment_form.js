import Ember from 'ember';
export default Ember.Component.extend({

	currentUserBinding: "session.currentUser",

	currentUserIdBinding: "session.currentUser.id",

	showForm: false,

	buyerId: null,

	buyerIdChanged: function() {
		if(!Ember.isEmpty(this.get('buyerId'))) {
			this.set('showForm', true);
		}else{
			this.set('showForm', false);
		}
	}.observes('buyerId'),

	actions: {
		payment_nonce: function(payment_nonce) {
			this.sendAction('payment_nonce', payment_nonce);
		}
	}

});