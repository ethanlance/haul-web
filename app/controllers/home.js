import Ember from 'ember';
import PaginateMixin from '../mixins/paginate';
export default Ember.ObjectController.extend(PaginateMixin,{

	limit: null,
	storeName: 'feed',
	currentUserIdBinding: 'Haul.currentUser.id',
	currentUserBinding: 'Haul.currentUser',
	isProfileOwner: true,  
	model:false,

	userChange: function() {
		
		//Pagination:	
		this.set('paginateQuery', {
			storeName: this.get('storeName'),
			limit: this.get('limit'), 
			user_id: this.get('currentUserId'),
		});
		this.set('paginateHasMore', true);
		this.paginateMore();
		
	}.on('init').observes('currentUserId'),

	actions: {
    	fetchMore: function(callback) {
			var promise = this.paginateMore();		
			if(callback){callback(promise)};
    	} 
	}
}); 