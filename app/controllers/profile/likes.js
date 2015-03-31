import Ember from 'ember';   
import PaginateMixin from '../../mixins/paginate';
export default Ember.ObjectController.extend(PaginateMixin,{ 

 	needs: ['profile'],

 	limit:null, 
 	thisPage: "likesPage", 
 	user: false,
	showGridViewBinding: 'controllers.profile.showGridView',
 	showGridBtn:true,
	currentUserIdBinding: 'session.currentUser.id',
	isProfileOwner: false, 
	
	sorting: ['created_at:desc'],
    sortedContent: Ember.computed.sort('pagedContent', 'sorting'),	

	userChanged: function() {
		//Pagination:	
		this.set('paginateQuery', {
			storeName: 'user-likes-list',
			limit: this.get('limit'), 
			user_id: this.get('user.id'),
		});
		this.set('paginateHasMore', true);
		this.paginateMore();
		
	}.observes('user'),

 	currentPageBinding: Ember.computed.alias('controllers.profile.currentPage'),
 	showHeaderChange: function(){ 
 		if( this.get('currentPage') === this.get('thisPage')){
 			this.set('controllers.profile.showGridBtn', this.get('showGridBtn'));
 			this.get('controllers.profile').set('showHeader', true);	
 		} 		
 	}.observes('currentPage'),

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
	}
});