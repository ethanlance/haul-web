import Ember from 'ember';

export default Ember.ObjectController.extend({

	currentUserBinding: 'session.currentUser',

	currentUserIdBinding: 'session.currentUser.id',

	paymentId: null,

	addressId: null,

	buyerId: null, 

	hasBuyerId: Ember.computed.notEmpty('buyerId'),

    hasAddressId: Ember.computed.notEmpty('addressId'),
    
    hasPaymentId: Ember.computed.notEmpty('paymentId'),
    
    hasPostId: Ember.computed.notEmpty('model.id'), 

    readyForTransaction: Ember.computed.and('hasBuyerId', 'hasAddressId', 'hasPaymentId', 'hasPostId'),

    showTransactionButton: Ember.computed.bool('readyForTransaction'),

	braintree_url: function() {
		console.log("BOOM?", this.ENV.BT_MERCHANT_ID);

		var braintree_merchant_id = this.ENV.BT_MERCHANT_ID
		var url = "https://www.braintreegateway.com/merchants/"+ braintree_merchant_id +"/verified";

		return url;
	}.property(),


	saveTransaction: function() {

		var transaction = this.store.createRecord('transaction', {
			user_id: this.get('buyerId'),
			address_id: this.get('addressId'),
			payment_id: this.get('paymentId'),
			post_id: this.get('model.id'),
			product_user_id: this.get('model.product_user.id'),
			product_id: this.get('model.product_id'),
		});

		transaction.save()
		.then(
			function success(record) {
				console.log('Save', record);
			},
			function failed(error) {
				console.log("Error", error);
			}
		)
	},


	modelChanged: function() {

		var product_status = this.get('model.product_status');
		this.set('isForSale', false);
		if( product_status == 'FOR_SALE' ) {
			this.set('isForSale', true);
			this.set('statusText', "FOR SALE");
		}else if( product_status === "SOLD") {
			this.set('statusText', "SOLD!");
		}else{
			this.set('statusText', "Not For Sale.");
		}

	}.observes('model', 'model.product_status'),

	actions: {

		doSubmitTransaction: function() {
			this.saveTransaction();
		}
	}

}); 