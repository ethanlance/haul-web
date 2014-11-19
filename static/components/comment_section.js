


Haul.CommentSectionComponent = Ember.Component.extend({
currentUser: null,
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

	userIdBinding: "currentUser.id",

	userTokenBinding: "currentUser.access_token",
	userIdBinding: "currentUser.id",
	
	//Normally a Product
	itemChanged: function() {
		//Get Ref Type: 
		var model = String(this.itemObject.constructor);
		var name = model.split('.');
        var itemType = Ember.String.camelize(name.pop());

        if(itemType == "product")
        	this.set('itemType', 'products');
        else
        	this.set('itemType', itemType);

	}.observes('itemObject'),


	//Normally a Market or User
	contextChanged: function() {
		//Get Ref Type: 
		var model = String(this.contextObject.constructor);
		var name = model.split('.');
        var contextType = Ember.String.camelize(name.pop());

        if(contextType == "product")
        	this.set('contextType', 'products');
        else
        	this.set('contextType', 'stores');

	}.observes('contextObject'),

	start: function() {
		this.itemChanged();
		this.contextChanged();

		this.makeModel();
		
		this.loadComments();

		var store = this.get('targetObject.store');
		var _this = this;
		var comments = store.filter('product-comment', function(comment) {
			if( comment.get('product_id') === _this.itemId 
				&& comment.get('context_id') === _this.contextId 
				&& comment.get('context_type') === _this.contextType ){ 

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
		var _this = this;
		var model = store.createRecord('product-comment');
		this.set('model', model);
	},

	loadComments: function() {
		var store = this.get('targetObject.store');
		var _this = this;

		var query = {'contextId':this.contextId, 'contextType':this.contextType, 'itemId':this.itemId};
		store.find('product-comment', query).then(function(comments){
			console.log("FOUND", comments)
			//_this.set('comments', comments);
		}, function(error) {
			console.log("ERROR", error) 
		});
	},

	saveModel: function() {
		var model = this.get('model');
		var _this = this;

		model.save().then(
			function(result) { 
				console.log("SAVED", result);

				_this.set('isProcessing', false);
				_this.set('errorShow', false);
				
				//Reload!
				_this.loadComments();
				_this.makeModel();

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
			console.log("DELETE", record);

			record.deleteRecord();
			record.save().then(function(result){
				console.log("Deleted" , result);
			}, function(error){
				console.log("Error" , error);
				record.rollback();
			})
		},

		submit: function() {

			this.set('isProcessing', true);

			var _this = this;
			var model = this.model;
			model.set('user_id', this.get('userId'));
			model.set('product_id', this.get('itemId'));
			model.set('type', this.get('contextType'));
			model.set('id', this.get('contextId'));

			//Trim
			model.set('comment', model.get('comment').trim()) 

	 		//Model Validations:
			model.validate().then(function(result){
				_this.saveModel();	
			}, function(error) {
				_this.set('isProcessing', false);
				_this.set('showErrors', true);
			});
		}
	}
});




