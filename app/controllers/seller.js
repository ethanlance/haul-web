import Ember from 'ember';  

export default Ember.ObjectController.extend({
	needs: ['seller', 'seller/index', 'seller/product/index'],
	currentPage:'seller',
 	showHeaderChange: function(){  
 		console.log("WOW!", this.get('showHeader'))
 	}.observes('showHeader'),
	collection:null
});