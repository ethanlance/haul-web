Haul.LikedByComponent = Ember.Component.extend({	
	users: [],
	ready: function() {
		var _this = this;
		var store = this.get('targetObject.store');
		var product = this.get('product');
		store.find('product-liked-by-list', product.id).then(function(results){
			console.log("HERE? ", results)
			if(!Ember.isEmpty(results)){
				_this.set('users', results.users);
			};
		});
	}.on('init')
});