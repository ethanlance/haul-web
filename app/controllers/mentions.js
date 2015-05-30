import Ember from 'ember';
import PaginateMixin from '../mixins/paginate';
export default Ember.ObjectController.extend(PaginateMixin, {

	loading: true,

	limit: null,
	
	storeName: 'user-mentions-list',
	
	currentUserIdBinding: 'session.currentUser.id',
	
	currentUserBinding: 'session.currentUser',
	
	model:false,
	
	sorting: ['created_at:desc'],

    sortedContent: Ember.computed.sort('pagedContent', 'sorting'),


	/**
        Start it up!
    **/
	setup: function() {

		if(!this.get('currentUserId')){ return; }


		this.startPagination();

		this.startFilter();
		
		
	}.on('init').observes('currentUserId'),


	/*
		Start up the pagination which automatically runs as page scrolls.
	*/
    startPagination: function() {

		//Pagination:	
		this.set('paginateQuery', {
			storeName: this.get('storeName'),
			limit: this.get('limit'), 
			user_id: this.get('currentUserId'),
		});
		this.set('paginateHasMore', true);

		var _this = this;
		this.paginateMore()
		.then(function(results){
			_this.set('loading', false);
		});
    },


    /**
        Start up the filter which automatically updates.
    **/
    startFilter: function() {
        
        var _this = this;
        
        
        
        var storeName = this.get('storeName');

        this.store.find(storeName, {user_id: this.get('currentUserId')})


        var filter = this.store.filter(storeName, function(result){
            //if( !result.get('read') ){
                return result;
            //}
        });
         
        _this.set('pagedContent', filter);  
    },




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





	redirectToPost: function(mention) {
		var _this = this;
		//Start by finding out who this is is from:
		mention.get('user')
		.then(function(user){

			_this.set('fromUsername', user.get('username'));
			
			//Find info about the post.
			return mention.get('subject');
		})

		.then(function(post){
			
			var post_username = post.get('user.username'); 
			var username_who_made_comment = _this.get('fromUsername');

			_this.transitionToRoute('profile.post', post_username, post, {
				queryParams: {anchor: "comments", reply: username_who_made_comment}
			});    			
		});
	},


	redirectToUser: function(mention) {
		var _this = this;
		
		//Start by finding out who this is is from:
		var subject_id = mention.get('subject_id');

		var userIds = subject_id.split("_");
		var fromUserId;

		if( this.get('currentUserId') !== userIds[0]) {
			fromUserId = userIds[0];
		}else{
			fromUserId = userIds[1];
		}

		this.store.find('user', fromUserId)

		.then(function(user){

			_this.set('fromUsername', user.get('username'));
			
			return;
		})

		.then(function(post){ 
			_this.transitionToRoute('profile.dm', _this.get('fromUsername') );    			
		});
	},


	redirectToTransaction: function(mention) {
		var _this = this;
		_this.transitionToRoute('settings.sales', mention.get('subject_id') );    			
	},

	redirectToMessage: function(mention) {

		var objectType = mention.get('subject_type');


		//Find out what type of message this is:
		//ie posts, transactions, usertousers
		if( objectType === "posts" ){

			this.redirectToPost( mention );

		}else if( objectType === "usertousers") {

			this.redirectToUser( mention );

		}else if( objectType === "transactions") {

			this.redirectToTransaction( mention );

		}

		this.markMentionAsRead(mention);

	},

	actions: {
    	fetchMore: function(callback) {
			var promise = this.paginateMore();		
			if(callback){callback(promise)};
    	},

    	doReply: function(mention) {
    		this.redirectToMessage(mention);
    	},

    	markRead: function(mention) {
    		this.markMentionAsRead(mention);
    	}
	}
}); 









