import Ember from 'ember';
import PaginateMixin from '../mixins/paginate';
export default Ember.ObjectController.extend(PaginateMixin,{

	loading: true,
	limit: null,
	storeName: 'user-mentions-list',
	currentUserIdBinding: 'session.currentUser.id',
	currentUserBinding: 'session.currentUser',
	model:false,
	
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
    	},

    	markRead: function(mention) {

    		console.log("MENTION", mention);

    		var _this = this;
    		var user_id = this.get('currentUserId');
    		var access_token = this.get('session.access_token');
    		var comment_id = mention.get('id');

    		Ember.$.ajax({
				url: _this.ENV.Server.COMMENT_SERVER_HOST  + '/users/'+user_id+'/comments/'+comment_id+'/read',
				type: 'PUT',
				headers: {
					Authorization: 'Bearer ' + access_token
				},
				dataType: 'json'
			})
			.then(
				function success(){
					
					_this.store.find('user-mentions-count', user_id)
					.then(function(r){
						r.reload();
					});

					_this.store.find('user-mentions-unread-count', user_id)
					.then(function(r){
						r.reload();
					});

					mention.set('read', true);

				},

				function error(error){
					console.log("ERROR", error);
				}
			);
    	}
	}
}); 









