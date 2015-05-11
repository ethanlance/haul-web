import Ember from 'ember';
import PaginateMixin from '../../mixins/paginate';
export default Ember.ObjectController.extend(PaginateMixin,{
		
	currentScrollPos: 0,

 	storeName: 'post-list',

 	limit:null,

 	thisPage: "feedPage",

 	user: false,

	currentUserIdBinding: 'session.currentUser.id',

	isProfileOwner: false, 

	isFeedPage:true,

	sorting: ['created_at:desc'],

    sortedContent: Ember.computed.sort('pagedContent', 'sorting'),	

	userChanged: function() {

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