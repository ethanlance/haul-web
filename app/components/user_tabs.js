import Ember from 'ember';

var UserTabsComponent = Ember.Component.extend({	
	followingCount: 0,
	followsCount: 0,
	likesCount: 0, 

	start: function() {
		this.ready();
	}.on('init'),

	ready: function() {
		
		var s = String(window.location.href);
		var arr = s.split('/');
		var i = arr.length - 1;
		var key = arr[i];

		this.set("isLikes", false);
		this.set("isFollows", false);
		this.set("isFollowers", false);
		this.set("isProfile", false);
		if( key === "likes" ){
			this.set("isLikes", true);
		}
		if( key === "follows" ){
			this.set("isFollows", true);
		}
		if( key === "followers" ){
			this.set("isFollowers", true);
		}
		if( key === this.get('user').id ){
			this.set("isProfile", true);
		}


		if(this.get('user')){
			var user_id = this.get('user').id;
			var store = this.get('targetObject.targetObject.store');
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
		}



	}.observes('user'),
});	
export default UserTabsComponent;