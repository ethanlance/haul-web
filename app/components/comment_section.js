import Ember from 'ember';
import config from '../config/environment';

import PaginateMixin from '../mixins/paginate';
export default Ember.Component.extend( PaginateMixin,{
	
	storeName: 'post-comment',	
	limit:10,
	hasMoreBinding: 'paginateHasMore',

	isProcessing:false,

	anchorBinding: 'anchor',
	postIdBinding: 'post.post_id',
	userIdBinding: 'post.user_id',
	currentUserBinding: "session.currentUser",
	currentUserIdBinding: "session.currentUser.id",

	totalLikesBinding: "post.likesCount.total",
	totalCommentsBinding: "post.commentCount.total",
	showSubmitCommentButton: false,

	model:null,
	comments: null,
	comment_box:null,
	commentsSorting: ['created_at:desc'],
    sortedComments: Ember.computed.sort('pagedContent', 'commentsSorting'),

    pollInterval: 3000,

	
	schedulePoll: function(f) {
    	var _this = this;
    	return Ember.run.later(this, function(){
    		f.apply(this);
    	}, _this.ENV.pollingTime.comments );
    },

    onPoll: function() {
    	var _this = this;
    	var store = this.container.lookup('store:main');
    	store.find('post-comment', {post_id: _this.get('postId')})
    	.then(function() {
    		_this.set('runPoll', _this.schedulePoll(_this.get('onPoll')));
		});
    },

    stopPoll: function() {
    	Ember.run.cancel(this.get('runPoll'));
    },

    startPoll: function() {
    	this.set('runPoll', this.schedulePoll(this.get('onPoll')));
    },


    willDestroyElement: function() {
    	this.stopPoll();
    },

    didInsertElement: function() {

    	
    	this.startPoll();
    	
    	this.startMentions();

  		if(this.get('anchor')) {
  			Ember.run.later(function(){
  				var top = $('#leaveComment').offset().top - 100;
	  			$('html, body').animate({
		        	scrollTop: top
		    	}, 800);
		    }, 300);
  		}

		this.makeModel();

		//Pagination:	
		this.set('paginateQuery', {
			storeName: this.get('storeName'),
			limit: this.get('limit'), 
			post_id: this.get('postId'),
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
		var filter = store.filter('post-comment', function(result) {
			if(result.id && (result.get('post_id') === _this.get('postId'))) {
				
				if( result.get('user_id') === _this.get('userId') ) {
					result.set('canDelete', true);
				}		
				return result;
			}
		});
		filter.then(function(results){
			_this.set('pagedContent', results);	
		});


		Ember.$(this.get('element')).find('textarea').keypress(function(e){

			$(e.currentTarget).css('outline', 0);

			if( e.currentTarget.value ){
				_this.set('showSubmitCommentButton', true);
			}else{
				_this.set('showSubmitCommentButton', false);
			}
		})
	},

	startMentions: function() {
		var _this = this;
		var box = $(".commentbox textarea");
		this.set('comment_box', box);

		//Get this people this user follows.
		var usernames = [];
		var store = this.container.lookup('store:main');
		store.find('user-following-list', {user_id: this.get('currentUserId'), limit:20} )
		.then(function(results) {

			return results.map(function(result){
				return store.find('user', result.get('user.id'))
					.then(function(user){
						usernames.push({
							name: user.get('username'),
							name2: user.get('name'),
							avatar: user.get('icon'),
							id: user.get('id'),
							type: 'users',
						});
					})
			});
		})

		.then(function(){
			
			$(box).mentionsInput({ 
		  		elastic: true,
		  		templates: {
					wrapper                    : _.template('<div class="mentions-input-box"></div>'),
					autocompleteList           : _.template('<div class="mentions-autocomplete-list"></div>'),
					autocompleteListItem       : _.template('<li data-ref-id="<%= id %>" data-ref-type="<%= type %>" data-display="<%= display %>">@<%= content %></li>'),
					autocompleteListItemAvatar : _.template('<img src="<%= avatar %>" />'),
					autocompleteListItemIcon   : _.template('<div class="icon <%= icon %>"></div>'),
					mentionsOverlay            : _.template('<div class="mentions"><div></div></div>'),
					mentionItemSyntax          : _.template('@<%= value %>'),
					mentionItemHighlight       : _.template('<strong><span><%= value %></span></strong>')
				},
		    	onDataRequest:function (mode, query, callback) {

		      		var data = usernames,

		      		data = _.filter(data, 
		      			function(item) { 
		      				return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1 ||  item.name2.toLowerCase().indexOf(query.toLowerCase()) > -1
		      			}
		      		);

		      		callback.call(this, data);
		    	}
		  	});
		});		
	},

	makeModel: function() {
		var store = this.container.lookup('store:main');
		var model = store.createRecord('post-comment');
		this.set('model', model);
		this.reset();
	},

	updateCommentCount: function(direction) {
		var store = this.container.lookup('store:main');
		store.find('post-comment-count', this.get('postId') )
		.then(function(record){
			if( direction === "up"){
				record.incrementProperty('total');
			}else{
				record.decrementProperty('total'); 
			}
		});
	},

	reset: function() {
		this.setProperties({
			serverErrorMessage: false,
			showServerErrors: false,
			showClientErrors: false,
			isProcessing: false,
		});
	},
 
	saveModel: function() {

		//this.reset();

		//Intercept if user is anonymous:
		if( !this.get('currentUserId')){
			this.sendAction('openModal', 'loginmodal', {});
			return;
		}


		var _this = this; 
		var store = this.container.lookup('store:main');
		var model = this.get('model');

		//Get the comment text from the .data() method that the 
		//jquery mentions script uses.

		var data = this.get('comment_box').data();

		model.set('comment', data.messageText);
		
		model.set('user_id', this.get('currentUserId'));
		model.set('post_id', this.get('postId'));

		model.validate()
		.then(
			function(){
				_this.set('isProcessing', true);
				return model.save();
			},
			function(error){
				_this.set('isProcessing', false);
				_this.set('showClientErrors', true);
				return;
			}
		)
		.then(
			function(record) {  
				_this.set('isProcessing', false);
				_this.set('showServerErrors', false);
				_this.makeModel();
				_this.updateCommentCount('up');

				_this.get('comment_box').mentionsInput('reset');

				_this.set('showSubmitCommentButton', false);
				
			},
			function(error){ 
				_this.set('isProcessing', false);
				_this.set('showServerErrors', true);

				var message;
				if( _this.ENV.errorMessages[error.status] ){
					message = _this.ENV.errorMessages[error.status];
				}else{
					message = _this.ENV.errorMessages[400];
				}

				var obj = JSON.parse(error.responseText);

				message = message + "<p>" + obj.message + "</p>";

				_this.set('serverErrorMessage', message);
			}
		);
	},

	actions: {

    	fetchMore: function() {
    		this.paginateMore();
    	},

		delete: function(record) {
			var _this = this;

			record.deleteRecord();
			record.save().then(function(){
				_this.updateCommentCount('down');
			}, function(error){
				console.log("Error" , error);
				record.rollback();
			});
		},

		submit: function() {
			this.saveModel();	
		}
	}
});
