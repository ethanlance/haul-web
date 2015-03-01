import Ember from 'ember';
var $ = Ember.$;  

export default Ember.ObjectController.extend({  

 	needs: ['profile'],

 	isRepost:false,
 
 	thisPage: "postPage", 
 	currentPageBinding: Ember.computed.alias('controllers.profile.currentPage'),
 	showHeaderChange: function(){ 

 		console.log("HEADER " , this.get('currentPage') +  " === " + this.get('thisPage'))

 		if( this.get('currentPage') === this.get('thisPage')){
 			this.get('controllers.profile').set('showHeader', true);	
 		} 		
 	}.observes('currentPage'),


	currentUserIdBinding: 'Haul.currentUser.id',
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
			console.log("OK", this.get('model').get('repost_user'));
			this.set('isRepost', true);
		}

	}.observes('currentUserId', 'model.id'),

	actions: {

		//Click "delete" in UI
		delete: function() {
			$('#deleteModal').modal('show');
		},

		deleteCancel: function() {
			$('#deleteModal').modal('hide');
		},

		deleteProceed: function() {
			$('#deleteModal').modal('hide');
			var _this = this;
			var user = this.get('currentUser');
			var product = this.model;
			var product_id = product.get('id');
			product.deleteRecord();
			
			product.save().then(
				function() { 

					//Delete from product-list model also;
					var store = _this.store;
					var pl = store.getById('product_list', product_id);
					if(pl){
						 store.deleteRecord(pl);
						 store.unloadRecord(pl);
					}

					_this.transitionToRoute('seller', user.get('slug'));
				},
				function(error){
					console.log("Error" , error);
				}
			);
		}

	}
});