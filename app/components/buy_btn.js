import Ember from 'ember';
export default Ember.Component.extend({
 
	
	postBinding:'post',

	isForSaleOffsite: Ember.computed.equal('post.product_status', "FOR_SALE_OFFSITE"),

	isForSale: Ember.computed.equal('post.product_status', "FOR_SALE"),

	isLink: Ember.computed.notEmpty('post.product_link'),


	actions: {
		followLink: function() {
			//window.location.href = this.get('post.product_link');
			var url = this.get('post.product_link');
			window.open(url, "_blank");
		}
	}
});