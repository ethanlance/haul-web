import Ember from 'ember';
export default Ember.Component.extend({
	
	postBinding:'post',

	isForSale: Ember.computed.equal('post.product_status', "FOR_SALE"),

	isLink: Ember.computed.notEmpty('post.product_link'),


	actions: {
		followLink: function() {
			window.location.href = this.get('post.product_link');
		}
	}
});