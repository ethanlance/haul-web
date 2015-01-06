import Ember from 'ember';

var UserInterestsComponent = Ember.Component.extend({

 	hasContent: false,

 	showFollows: true,
 	showFollowers: false,
 	showLikes: false,

 	follows:null,
 	followers:null,
 	likes:null,

 	followsCount: 0,
 	followersCount: 0,
 	likesCount: 0,

 	store: null,
 	user_id:"",

 	user: '',

 	start: function(){ 		
 		this.userChanged();
 	}.on('init'),

 	countsChanged: function() {
 		if( this.get('followsCount') > 0 || this.get('followersCount') > 0 || this.get('likesCount') > 0){
 			this.set('hasContent', true);
 		}else{
 			this.set('hasContent', false);
 		}

 		if( this.get('followsCount') === 0 && this.get('followersCount') > 0) {
 			this.getFollowers();
 		}else if( this.get('followsCount') === 0 && this.get('likesCount') > 0) {
 			this.getLikes();
 		}

 	}.observes('followsCount', 'followersCount', 'likesCount'),

 	userChanged: function() {
 		this.set('user_id', this.get('user').get('id'));
 		this.set('store', this.get('targetObject.store'));
 		
 		var user_id = this.get('user_id');
		var _this = this;

		this.getFollows();

		this.store.find('user-is-following-count', user_id).then(function(count){
			_this.set('followsCount', count.get('total'));
		});
		this.store.find('user-is-followed-by-count', user_id).then(function(count){
			_this.set('followersCount', count.get('total'));			
		});
		this.store.find('user-likes-count', user_id).then(function(count){
			_this.set('likesCount', count.get('total'));			
		});
 	}.observes('user'),

 	getFollows: function() {
		this.set('follows', this.store.find('user-follows-list', {id:this.get('user_id')})); 
		this.set('showFollows', true);
		this.set('showFollowers', false);
		this.set('showLikes', false);
 	},
 	
 	getFollowers: function() {
		this.set('followers', this.store.find('user-followers-list', this.get('user_id') ));
		this.set('showFollows', false);
		this.set('showFollowers', true);
		this.set('showLikes', false);
 	},
 	
 	getLikes: function() {
		this.set('likes', this.store.find('user-likes-list', this.get('user_id') ));
		this.set('showFollows', false);
		this.set('showFollowers', false);
		this.set('showLikes', true);
 	},

 	actions: {
 		clickFollows: function(){
 			this.getFollows();
 		},

 		clickFollowers: function(){
 			this.getFollowers();
 		},

 		clickLikes: function(){
 			this.getLikes();
 		},
 	}


 });
export default UserInterestsComponent;