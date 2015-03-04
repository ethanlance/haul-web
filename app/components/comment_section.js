import Ember from 'ember';
import config from '../config/environment';
var Haul = config.APP;


var CommentSectionComponent = Ember.Component.extend({
	
	isProcessing:false,

	currentUserBinding: "session.currentUser",
	currentUserIdBinding: "session.currentUser.id",

	comments: null,
	commentsSorting: ['created_at:desc'],
    sortedComments: Ember.computed.sort('comments', 'commentsSorting'),

	

	start: function() { 
return;
		this.makeModel();
		
		this.loadComments();

		var store = this.get('targetObject.store');
		var _this = this;
		var comments = store.filter('post-comment', function(comment) {

			var itemId = comment.get('product_id');
			var contextId = comment.get('context_id');
			
			var contextType = _this.reverse_type_map[comment.get('context_type')];
			
			if( itemId && itemId === _this.itemId && contextId === _this.contextId && contextType === _this.contextType ){ 

				//Can this comment be deleted by the currentUser?
				if (comment.get('user_id') === _this.get('userId')) {
					comment.set('canDelete', true);
				}

				return comment;
			}
		});
 
		_this.set('comments', comments);

	}.on('init'),

	makeModel: function() {
		var store = this.container.lookup('store:main');
		var model = store.createRecord('product-comment');
		this.set('model', model);
	},

	loadComments: function() {
		var store = this.container.lookup('store:main');
		
		var query = {'contextId':this.contextId, 'contextType':this.contextType, 'itemId':this.itemId};
		store.find('product-comment', query).then(function(){
		}, function(error) {
			console.log("ERROR", error);
		});
	},

	updateCommentCount: function(direction) {
		var store = this.container.lookup('store:main');
		//var key = this.type_map[this.contextType] + ':' + this.contextId + ":" + this.itemType + ":" + this.itemId;
	
		var key = this.contextId + "_" + this.itemId;

		var storeName = null;
		if( this.contextType == "collections"){
			storeName = "collection-product-comment-count"
		}

		if( this.contextType == "users"){
			storeName = "product-comment-count"
		}

		store.find(storeName, key )
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
			model.set('user_id', this.get('userId'));
			model.set('product_id', this.get('itemId'));
			model.set('type', this.get('contextType'));
			model.set('id', this.get('contextId')); 

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
export default CommentSectionComponent;