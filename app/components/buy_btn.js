import Ember from 'ember';
export default Ember.Component.extend({
	
	postBinding:'post',

	isForSale: Ember.computed.equal('post.product_status', "FOR_SALE"),


});