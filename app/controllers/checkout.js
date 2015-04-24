import Ember from 'ember';

export default Ember.ObjectController.extend({

	braintreeClientTokenBinding: 'this.ENV.braintreeClientToken',

	currentUserBinding: 'session.currentUser',

	braintree_url: function() {
		console.log("BOOM?", this.ENV.BT_MERCHANT_ID);

		var braintree_merchant_id = this.ENV.BT_MERCHANT_ID
		var url = "https://www.braintreegateway.com/merchants/"+ braintree_merchant_id +"/verified";

		return url;
	}.property(),

	modelChanged: function() {



		// //User braintee token:
		// this.makeToken()
		// .then(
		// 	function success(result) {
		// 		console.log('token result', result);
				
		// 		//Skip create buyer form.  Show shipping form.

		// 	},
		// 	function failed(error) {
		// 		console.log('token result', error);	

		// 		//Show create buyer form.
		// 	}
		// )



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

}); 