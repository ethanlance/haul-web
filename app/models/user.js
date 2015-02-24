import DS from "ember-data"; 
import Ember from 'ember';

export default DS.Model.extend({
	username: DS.attr('string'),
	name: DS.attr('string'),
	email: DS.attr('string'),
	facebook_user_id: DS.attr('string'),
	image: DS.belongsTo('image', {async:true}),
	image_id: DS.attr('string'), 

	getFollowersCount: DS.belongsTo('user-followers-count', {async:true}),
	//getFollowers: DS.belongsTo('user-followers-list', {async:true}),

	getFollowingCount: DS.belongsTo('user-following-count', {async:true}),
	//getFollowing: DS.belongsTo('user-following-list', {async:true}),

	getLikesCount: DS.belongsTo('user-likes-count', {async:true} ),
	//getLikes: DS.belongsTo('user-likes-list', {async:true}), 

	icon: DS.attr('string'), 
	iconChange: function() { 
		Ember.run.once(this, 'iconChangeSync');
	}.observes('image_id', 'facebook_user_id').on('init'),

	iconChangeSync: function() {
		if( this.get('image_id') ){
			this.getIconImage();
		}else if( this.get('facebook_user_id') ) { 
			this.getIconFacebook();
		} 
	},

	getIconFacebook: function() {
		var url = "https://graph.facebook.com/" + this.get('facebook_user_id') + "/picture?width=200";
		this.set('icon', url);
	},

	getIconImage: function() {

		var _this = this;
		var image_id = this.get('image_id');
		var i = 0;
		var retryTimes = 10;
		var retryWait = 2000;

		//If no thumb returns, then try again.
		//This happens when icons are uploaded, the image
		//takes time to crunch.
		function waitingForResponse() {
			i++;
			_this.store.find('image', image_id)
			.then(function(image){
				return image.reload();	
			}).then(function(image) {
				var thumb  = image.get('thumb');
				if( !thumb && i < retryTimes ) { 
				} else { 
					window.clearInterval(_this.getThumbInterval);
					_this.set('icon', thumb);
				} 
			});
		} 

		//Get the thumb
		_this.store.find('image', image_id)
		.then(function(image){ 
			return image; 
		}).then(function(image) {
			var thumb  = image.get('thumb');
			if( !thumb && i < retryTimes ) { 
				_this.getThumbInterval = setInterval(function () { 
					waitingForResponse();
				}, retryWait); 
			} else {
				_this.set('icon', thumb);
			}
		});
	}
});