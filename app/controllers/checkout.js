import Ember from 'ember';

export default Ember.ObjectController.extend({

	braintreeClientTokenBinding: 'this.ENV.braintreeClientToken',

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


	getPaymentId: function(paymentNonce) {

		var _this = this;

		var bearer = this.get('currentUser.access_token');

		var data = {'payment_method_nonce':paymentNonce};

		var user_id = this.get('currentUser.id');

		var host = this.ENV.Server.PROSPER_SERVER_HOST;

		var url = host + '/buyers/'+ user_id +'/payments';
		
		var promise = Ember.$.ajax({
			url:         url,
			type:        "PUT",
			data:        data,
			dataType:    'json',
			contentType: 'application/x-www-form-urlencoded',
			headers: {
				Authorization: 'Bearer ' + bearer
			},
		});

		promise.then(
			function success(response){
				console.log("SUCCESS", response);

				_this.set('paymentId', response.data.payment_id);

			},	

			function failed(error){
				console.log("FAILED", error);
			}
		);

	},


	saveTransaction: function() {

		console.log("TRANSACTION");

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

	}.observes('model'),

	actions: {

		doSubmitTransaction: function() {
			this.saveTransaction();
		},

		payment_nonce: function(nonce) {
			console.log("NONCE", nonce);
			this.getPaymentId(nonce);
		},

		selected_address_id: function(id) {
			this.set('addressId', id);
		},

		selected_buyer_id: function(id) {
			this.set('buyerId', id);
		}
	}

}); 