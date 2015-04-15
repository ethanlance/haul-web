import Ember from 'ember';
var $ = Ember.$;  

export default Ember.ObjectController.extend({  

 	needs: ['profile'],
 	statusText: "FOR SALE",

 	thisPage: "postPage", 
 	isRepost:false,
 	postHasImage: false,
	currentPageBinding: 'controllers.profile.currentPage',
 	showGridBtn:false,
 
 	queryParams: {
    	anchor: "anchor"
  	},
  	anchor: null,
 	
 	showHeaderChange: function(){ 
 		if( this.get('currentPage') === this.get('thisPage')){
 			this.set('controllers.profile.showGridBtn', this.get('showGridBtn'));
 			this.get('controllers.profile').set('showHeader', true);	
 		} 		
 	}.observes('currentPage'),


	currentUserIdBinding: 'session.currentUser.id',
	collectionsBinding: "collections.collections",
	userIdBinding: 'model.user.id',
	watchScroll:null,
	url: "", 
	
	//Is currentUser viewing his own page?
	isProfileOwner: false,

	setup: function() { 

		this.set('isProfileOwner', false);
		if( this.get('session').isAuthenticated && !Ember.isEmpty(this.get('currentUserId'))  ){
			if( this.get('model').get('user').get('id') === this.get('currentUserId')) {
				this.set('isProfileOwner', true);
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
		if( body.indexOf("[img") > -1 ) {
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