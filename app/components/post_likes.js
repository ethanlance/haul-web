import Ember from 'ember';
import config from '../config/environment';

import PaginateMixin from '../mixins/paginate';
export default Ember.Component.extend( PaginateMixin,{

	postIdBinding: 'post.id',

	storeName: 'post-liked-by-list',

	currentUserIdBinding: "session.currentUser.id",

	limitBinding: "this.ENV.paginationLimit.comments",

	hasMoreBinding: 'paginateHasMore',

	sorting: ['created_at:desc'],
    
    sortedResults: Ember.computed.sort('pagedContent', 'sorting'),

	didInsertElement: function() {
 

		//Pagination:	
		this.set('paginateQuery', {
			storeName: this.get('storeName'),
			limit: this.get('limit'), 
			id: this.get('postId'),
		});
		this.set('paginateHasMore', true);

		var store = this.container.lookup('store:main'); 
		store.setMetadataFor(this.get('storeName'), { 
			next: '',
			previous: '',
			limit: '',
			count: '',
		});  

		//Set Content.
		this.paginateMore()

		//The Filter. 
		var _this = this;
		var filter = store.filter('post-liked-by-list', function(result) {
			if(result.id && (result.get('post_id') === _this.get('postId'))) {	 
				return result;
			}
		});
		filter.then(function(results){
			_this.set('pagedContent', results);	
		});

	}

});