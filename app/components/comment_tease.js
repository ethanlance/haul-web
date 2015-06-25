import Ember from 'ember';
import config from '../config/environment';

import PaginateMixin from '../mixins/paginate';
import PollingMixin from '../mixins/polling';
export default Ember.Component.extend( PaginateMixin, PollingMixin, {

	post: null,
	
	objectIdBinding: 'post.id',

	objectType: 'posts',
	 
	limit: 3,

	storeName: 'comment',
	
	commentsSorting: ['created_at:desc'],
    
    sortedComments: Ember.computed.sort('pagedContent', 'commentsSorting'),

    setup: function() { 
    	this.startFilter(); 
	}.on('didInsertElement'),

	startFilter: function() {
		//The Filter. 
		var _this = this;
		var store = this.container.lookup('store:main'); 
		store.find(this.get('storeName'), { limit: this.get('limit'), object_id: this.get('objectId'), object_type: this.get('objectType')});
		var filter = store.filter('comment', function(result) {
			if(result.id && (result.get('object_id') === _this.get('objectId'))) {
				
				if( result.get('user_id') === _this.get('currentUserId') ) {
					result.set('canDelete', true);
				}		 
				return result;
			}
		});
		filter.then(function(results){
			_this.set('pagedContent', results);	
		});
	},
});
