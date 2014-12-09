

Haul.CommentBtnComponent = Ember.Component.extend(Haul.ScrollToMixin, {
	currentUser: null,
	isProcessing:false,

	itemObject: null,
	itemType: null,
	itemIdBinding: "itemObject.id",

	contextObject: null,
	contextType: null,
	contextIdBinding: "contextObject.id",
 
	userIdBinding: "currentUser.id",

	commentCount: 0,
	commentCountBinding: "promiseCount.total",

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

	key: function() {
		return this.type_map[this.contextType] + ':' + this.contextId + ":" + this.itemType + ":" + this.itemId;
	}.property('contextType', 'contextId', 'itemType', 'itemId'),


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

		var store = this.get('targetObject.store');
		var key = this.get('key');
		this.set('promiseCount', store.find('product-comment-count', key ));

	}.on('init'),


	actions: {
		scrollTo: function() { 
            this.scrollTo('#leaveComment');
		}
	}
});