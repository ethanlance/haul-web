import Ember from 'ember';
import Haul from "../app";

var CommentSectionComponent = Ember.Component.extend({
	
	isProcessing:false,

	comments: null,
	commentsSorting: ['created_at:desc'],
    sortedComments: Ember.computed.sort('comments', 'commentsSorting'),

	itemObject: null,
	itemType: null,
	itemIdBinding: "itemObject.id",

	contextObject: null,
	contextType: null,
	contextIdBinding: "contextObject.id",
 
	userIdBinding: "session.currentUser.id",

	type_map: {
		"collections": "stores",
		"products": "products",
		"users": "users",
	},

	reverse_type_map: {
		"stores": "collections",
		"products": "products",
		"users": "users"
	},
	
	//Normally a Product
	itemChanged: function() {
		//Get Ref Type: 
		var model = String(this.itemObject.constructor);
		var name = model.split('.');
        var itemType = Ember.String.pluralize(Ember.String.camelize(name.pop())); 
        this.set('itemType', itemType);

	}.observes('itemObject'),


	//Normally a Collection or User
	contextChanged: function() {
		//Get Ref Type: 
		var model = String(this.contextObject.constructor);
		var name = model.split('.');
        var contextType = Ember.String.pluralize(Ember.String.camelize(name.pop()));
        this.set('contextType', contextType);

	}.observes('contextObject'),

	start: function() { 
		this.itemChanged();
		this.contextChanged();

		this.makeModel();
		
		this.loadComments();

		var store = this.get('targetObject.store');
		var _this = this;
		var comments = store.filter('product-comment', function(comment) {

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
		var store = this.get('targetObject.store');
		
		var model = store.createRecord('product-comment');
		this.set('model', model);
	},

	loadComments: function() {
		var store = this.get('targetObject.store');
		

		var query = {'contextId':this.contextId, 'contextType':this.contextType, 'itemId':this.itemId};
		store.find('product-comment', query).then(function(){
		}, function(error) {
			console.log("ERROR", error);
		});
	},

	updateCommentCount: function(direction) {
		var store = this.get('targetObject.store');
		var key = this.type_map[this.contextType] + ':' + this.contextId + ":" + this.itemType + ":" + this.itemId;
		var record = store.getById('product-comment-count', key );

		if(record){
			if( direction === "up"){
				record.incrementProperty('total');
			}
			else{
				record.decrementProperty('total'); 
			}
		}
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
				console.log("Error" , error);
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