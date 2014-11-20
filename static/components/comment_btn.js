

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
	commentCountBinding: "count.content.firstObject.total",

	key: function() {
		return this.contextType + ':' + this.contextId + ":" + this.itemType + ":" + this.itemId;
	}.property('contextType', 'contextId', 'itemType', 'itemId'),


	//Normally a Product
	itemChanged: function() {
		//Get Ref Type: 
		var model = String(this.itemObject.constructor);
		var name = model.split('.');
        var itemType = Ember.String.pluralize(Ember.String.camelize(name.pop())); 
        this.set('itemType', itemType);
	}.observes('itemObject'),


	//Normally a Market or User
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
		var _this = this; 
		var key = this.get('key');
		store.find('product-comment-count', key );

		var counts = store.filter('product-comment-count', function(record) {
			if( record.get('id') === key ){ 
				return record;
			}
		});
		this.set('count', counts);

	}.on('init'),


	actions: {
		scrollTo: function() { 
            this.scrollTo('#leaveComment');
		}
	}
});