Haul.ProductCollectionsComponent = Ember.Component.extend({	
	content: null,
	collectionsBinding: "content.collections",
	ready: function() {
		var _this = this;
		var store = this.get('targetObject.store');
		this.set('content', store.find('product-collection-list', this.get('product').get('id')));
	}.on('init')
});