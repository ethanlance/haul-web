Haul.LikedByComponent = Ember.Component.extend({	
	content: null,
	users: null,
	usersBinding: "content.users",
	ready: function() {
		var _this = this;
		var store = this.get('targetObject.store');
		var product = this.get('product');
		this.set('content', store.find('product-liked-by-list', product.get('id')));
	}.on('init')
});