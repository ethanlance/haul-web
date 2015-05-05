import Ember from 'ember';
var $ = Ember.$;  

export default Ember.ObjectController.extend({  

 	needs: ['profile'],

 	statusText: "FOR SALE",

 	isRepost:false,

 	postHasImage: false,
	
	currentPageBinding: 'controllers.profile.currentPage',

 	totalLikesBinding: "model.likesCount.total",

	totalCommentsBinding: "model.commentCount.total",

 	queryParams: {
    	anchor: "anchor"
  	},
  	anchor: null,
 	
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

		this.set('isRepost', false);
		if(!Ember.isEmpty(this.get('model').get('repost_user').get('content'))){
			this.set('isRepost', true);
		}

		//Does the body have an image?
		this.set('postHasImage', false);
		var body = this.get('model').get('body');
		if( body && body.indexOf("[img") > -1 ) {
			this.set('postHasImage', true);
		}

		var product_status = this.get('model.product_status');
		this.set('isForSale', false);
		if( product_status == 'FOR_SALE' ) {
			this.set('isForSale', true);
			this.set('statusText', "FOR SALE");
		}else if( product_status === "SOLD") {
			this.set('statusText', "SOLD!");
		}else{
			this.set('statusText', "Not For Sale.");
		}


	}.observes('currentUserId', 'model.id', 'model', 'model.body', 'model.product_status'),
});