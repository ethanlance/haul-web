import Ember from 'ember';
import PaginateMixin from '../../../mixins/paginate';
export default Ember.ObjectController.extend(PaginateMixin,{

	currentUserBinding: "session.currentUser",

	currentUserIdBinding: "session.currentUser.id",

	loading: true,

	limit: null,
	
	storeName: 'transaction-list',

	transactions: null,

	sorting: ['created_at:desc'],

    sortedContent: Ember.computed.sort('pagedContent', 'sorting'),	

	userChange: function() {

		if( Ember.isEmpty(this.get('currentUserId'))) {
			return;
		}

		//Pagination:	
		this.set('paginateQuery', {
			storeName: this.get('storeName'),
			limit: this.get('limit'), 
			user_id: this.get('currentUserId'),
			context: "sellers"
		});
		this.set('paginateHasMore', true);

		var _this = this;
		var promise = this.paginateMore()
		.then(function(results){

			_this.set('loading', false);
		});

		
	}.on('init').observes('currentUserId'),	

	actions: {
    	fetchMore: function(callback) {
			var promise = this.paginateMore();		
			if(callback){callback(promise)};
    	} 
	}
});