import Ember from 'ember';
import PaginateMixin from '../mixins/paginate';
export default Ember.ObjectController.extend(PaginateMixin, {

	loading: true,

	limit: null,
	
	storeName: 'feed',
	
	currentUserIdBinding: 'session.currentUser.id',
	
	currentUserBinding: 'session.currentUser',
	
	isProfileOwner: true,  

	model:false,
	
	sorting: ['created_at:desc'],
	
    sortedContent: Ember.computed.sort('pagedContent', 'sorting'),	

    currentScrollPos: 0,

    allowExternalLink: false, 
    
	startPagination: function() {

		if( Ember.isEmpty(this.get('currentUserId'))) {
			return;
		}

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