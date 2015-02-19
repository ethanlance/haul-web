import Ember from 'ember';  

export default Ember.ObjectController.extend({
	needs: ['profile/index', 'profile/post/index'],
 
	currentPage:'seller',
	collection:null
});