import Ember from 'ember';

export default Ember.ObjectController.extend({

	braintreeClientTokenBinding: 'this.ENV.braintreeClientToken',

	currentUserBinding: 'session.currentUser',

	makeToken: function() {

		var user_id = this.get('currentUser').id;
		var host = this.ENV.Server.PROSPER_SERVER_HOST;
		var url = host + "/buyers/" + user_id + "/tokens";
		var type = "GET";
		var bearer = this.get('currentUser').get('access_token');
console.log('bear', bearer)
		return Ember.$.ajax({
			url:         url,
			type:        type,
			dataType:    'json',
			contentType: 'application/x-www-form-urlencoded',
			headers: {
				Authorization: 'Bearer ' + bearer
			},
		});

	},

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