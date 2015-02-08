import Ember from 'ember';  

export default Ember.ObjectController.extend({
	needs: ['seller', 'seller/index', 'seller/product/index'],
	currentPage:'seller',
	collection:null
});