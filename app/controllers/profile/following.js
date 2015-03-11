import Ember from 'ember'; 
import PaginateMixin from '../../mixins/paginate';
export default Ember.ObjectController.extend(PaginateMixin,{ 

 	needs: ['profile'],

 	limit:null,
 	thisPage: "followingPage", 
 	user: false,
 	currentPageBinding: 'controllers.profile.currentPage',
	showGridBtn:false,
	currentUserIdBinding: 'Haul.currentUser.id',
	userIdBinding: 'model.id',
	isProfileOwner: false,

	actions: {
    	fetchMore: function(callback) {
			var promise = this.paginateMore();		
			if(callback){callback(promise)};
    	} 
	},

	userChanged: function() {
		
		//Pagination:	
		this.set('paginateQuery', {
			storeName: 'user-following-list',
			limit: this.get('limit'), 
			user_id: this.get('user.id'),
		});
		this.set('paginateHasMore', true);
		this.paginateMore();
		
	}.observes('user'),

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

});