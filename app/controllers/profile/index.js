import Ember from 'ember';
import PaginateMixin from '../../mixins/paginate';
export default Ember.ObjectController.extend(PaginateMixin,{
	
 	needs: ['profile'],

 	storeName: 'post-list',
 	limit:null,
 	thisPage: "feedPage",
 	user: false,
	currentUserIdBinding: 'session.currentUser.id',
	isProfileOwner: false, 
	isFeedPage:true,
	currentPos:'3000px',
	showGridViewBinding: 'controllers.profile.showGridView',
	showGridBtn:true,

	sorting: ['created_at:desc'],
    sortedContent: Ember.computed.sort('pagedContent', 'sorting'),	

 	currentPageBinding: 'controllers.profile.currentPage',
 	showHeaderChange: function(){  
 		if( this.get('currentPage') === this.get('thisPage')){
 			this.set('controllers.profile.showGridBtn', this.get('showGridBtn'));
 			this.get('controllers.profile').set('showHeader', true);	
 		} 		
 	}.observes('currentPage'),

	userChanged: function() {

		this.set('controllers.profile.showGridBtn', this.get('showGridBtn')); 
		this.showHeaderChange();

		//Pagination:	
		this.set('paginateQuery', {
			storeName: this.get('storeName'),
			limit: this.get('limit'), 
			user_id: this.get('user.id'),
		});
		this.set('paginateHasMore', true);
		this.paginateMore();
		
	}.observes('user'),

	isProfileOwnerChanged: function() {
		this.set('isProfileOwner', false); 
		if( this.get('session').isAuthenticated && !Ember.isEmpty(this.get('currentUserId')) ) {
			if (this.get('user').get('id') === this.get('currentUserId')) {
				this.set('isProfileOwner', true);
			}
		} 
	}.observes('user', 'currentUserId'),

	actions: {
    	fetchMore: function(callback) {
			var promise = this.paginateMore();		
			if(callback){callback(promise)};
    	} 
	},
}); 