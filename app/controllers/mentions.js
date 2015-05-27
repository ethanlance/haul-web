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

	markMentionAsRead: function(mention) {
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

			function failure(error){
				console.log("ERROR", error);
			}
		);
	},

	actions: {
    	fetchMore: function(callback) {
			var promise = this.paginateMore();		
			if(callback){callback(promise)};
    	},

    	doReply: function(mention) {
    		this.markMentionAsRead(mention);

    		//var username = mention.subject.user.username
    		var _this = this;
    		var post = mention.post;

    		//Find username of the commenter
    		mention.get('user')
    		.then(function(user){

    			_this.set('username_who_made_comment', user.get('username'));
				
				//Find info about the post.
				return mention.get('subject');
			})
			.then(function(post){
				
				var post = post;
				var post_username = post.get('user.username'); 
				var username_who_made_comment = _this.get('username_who_made_comment');

    			_this.transitionToRoute('profile.post', post_username, post, {
    				queryParams: {anchor:"comments", reply:username_who_made_comment}
    			});    			
    		});


    	},

    	markRead: function(mention) {
    		this.markMentionAsRead(mention);
    	}
	}
}); 









