import Ember from 'ember';
var $ = Ember.$;  

export default Ember.ObjectController.extend({  

 	needs: ['profile'],

 	

 	isRepost:false,

 	postHasImage: false,
	
	currentPageBinding: 'controllers.profile.currentPage',

 	totalLikesBinding: "model.likesCount.total",

	totalCommentsBinding: "model.commentCount.total",

 	queryParams: {
    	anchor: "anchor",
    	reply: "reply"
  	},
  	anchor: null,
  	reply: null,
 	
	currentUserIdBinding: 'session.currentUser.id',
	
	userIdBinding: 'model.user.id',
	
	watchScroll:null,
	
	url: "", 

	model: null,
	
	//Is currentUser viewing his own page?
	isProfileOwner: false,

	setup: function() { 

		if(Ember.isEmpty(this.get('model'))) {
			return;
		}

		this.set('isProfileOwner', false);

		this.set('isProductOwner', false);

		//Can this user edit this post?
		if( this.get('session').isAuthenticated && !Ember.isEmpty(this.get('currentUserId'))  ){
			if( this.get('model').get('user').get('id') === this.get('currentUserId')) {
				this.set('isProfileOwner', true);


				//Ok, can the user edit this product?
				if( this.get('session').isAuthenticated && !Ember.isEmpty(this.get('currentUserId'))  ){
					if( this.get('model').get('product_user').get('id') === this.get('currentUserId')) {
						this.set('isProductOwner', true);
					}
				}
			}
		}
		
		this.set('url', window.location.href);


	}.observes('currentUserId', 'model.id', 'model', 'model.body', 'model.product_status'),
});