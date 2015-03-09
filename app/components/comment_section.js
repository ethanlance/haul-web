import Ember from 'ember';
import config from '../config/environment';
var Haul = config.APP;

export default Ember.Component.extend({
	
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
    },

	start: function() { 

		this.makeModel();
		
		this.loadComments();

		var store = this.get('targetObject.store');
		var _this = this;
		var comments = store.filter('post-comment', function(comment) {

			var postId = comment.get('post_id');
			
			if(!Ember.isEmpty(comment.get('id')) && (comment.get('post') && comment.get('post_id') === _this.get('postId')) ){ 

				//Can this comment be deleted by the currentUser?
				if (comment.get('user_id') === _this.get('currentUserId')) {
					comment.set('canDelete', true);
				}

				return comment;
			}
		});
 
		_this.set('comments', comments);

	}.on('init'),

	makeModel: function() {
		var store = this.container.lookup('store:main');
		var model = store.createRecord('post-comment');
		this.set('model', model);
	},

	loadComments: function() {
		var store = this.container.lookup('store:main');
		
		var query = {'postId':this.postId};
		store.find('post-comment', query).then(function(){
		}, function(error) {
			console.log("ERROR", error);
		});
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
		var model = this.get('model');
		var _this = this; 
		model.save().then(
			function() {  
				_this.set('isProcessing', false);
				_this.set('errorShow', false);
				
				//Reload!
				_this.loadComments();
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