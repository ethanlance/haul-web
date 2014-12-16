Haul.UserTabsComponent = Ember.Component.extend({	
	followingCount: 0,
	followsCount: 0,
	likesCount: 0,

	ready: function() {
		var user_id = this.get('user').get('id');
		var store = this.get('targetObject.store');
		var _this = this;
		store.find('user-is-following-count', user_id).then(function(count){
			_this.set('followingCount', count.get('total'));
		});
		store.find('user-is-followed-by-count', user_id).then(function(count){
			_this.set('followsCount', count.get('total'));			
		});
		store.find('user-likes-count', user_id).then(function(count){
			_this.set('likesCount', count.get('total'));			
		});
	}.on('init'),
});	