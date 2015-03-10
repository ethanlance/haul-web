import Ember from 'ember';
import config from '../config/environment';
var Haul = config.APP;
import PaginateMixin from '../mixins/paginate_component';
export default Ember.Component.extend( PaginateMixin,{
	
	paginateMeta: {
		limit: 10, 
		storeName: 'post-comment',
	},

	hasMoreBinding: 'paginateHasMore',

	isProcessing:false,

	anchorBinding: 'anchor',
	postIdBinding: 'post.post_id',
	currentUserBinding: "session.currentUser",
	currentUserIdBinding: "session.currentUser.id",

	comments: null,
	commentsSorting: ['created_at:desc'],
    sortedComments: Ember.computed.sort('comments', 'commentsSorting'),

    didInsertElement: function() {
  		if(this.get('anchor')) {
  			var top = $('#leaveComment').offset().top;
  			$('html, body').animate({
	        	scrollTop: top
	    	}, 800);
  		}

		this.makeModel();

		//Pagination:
		this.set('paginateFilterCheck', {post_id: this.get('postId')});
		this.set('paginateQuery', {post_id: this.get('postId')});
		this.set('comments', this.paginateFilter());
		this.paginateMore();
	},

	makeModel: function() {
		var store = this.container.lookup('store:main');
		var model = store.createRecord('post-comment');
		this.set('model', model);
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

	saveModel: function() {
		var store = this.container.lookup('store:main');
		var model = this.get('model');
		var _this = this; 
		model.save()
		.then(
			function(record) {  
				_this.set('isProcessing', false);
				_this.set('errorShow', false);
				_this.makeModel();
				_this.updateCommentCount('up');

			},
			function(error){ 
				_this.set('isProcessing', false);
				_this.set('errorShow', true);
				_this.set('errorMessage', Haul.errorMessages.get(error.status));
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

			//Intercept if user is anonymous:
			if( !this.get('currentUserId')){
				this.sendAction('openModal', 'loginmodal', {});
				return;
			}

			this.set('isProcessing', true);

			var _this = this;
			var model = this.model;
			model.set('user_id', this.get('currentUserId'));
			model.set('post_id', this.get('postId'));

	 		//Model Validations:
			model.validate().then(function(){
				model.set('comment', model.get('comment').trim());
				_this.saveModel();	
			}, function() {
				_this.set('isProcessing', false);
				_this.set('showErrors', true);
			});
		}
	}
});