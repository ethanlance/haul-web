import Ember from 'ember';
var $ = Ember.$;  

export default Ember.ObjectController.extend({  

 	needs: ['seller'],
 	
 	thisPage: "postPage", 
 	currentPageBinding: Ember.computed.alias('controllers.seller.currentPage'),
 	showHeaderChange: function(){ 
 		console.log("CURRENTPAGE IS", this.get('currentPage')) 
 		if( this.get('currentPage') === this.get('thisPage')){
 			console.log(this.get('currentPage') +" === " +this.get('thisPage'))
 			this.get('controllers.seller').set('showHeader', true);	
 		} 		
 	}.observes('currentPage'),


	currentUserIdBinding: 'Haul.currentUser.id',
	collectionsBinding: "collections.collections",
	userIdBinding: 'model.collection.user.id',
	watchScroll:null,
	url: "", 
	
	//Is currentUser viewing his own page?
	isProfileOwner: false,

	setup: function() { 

		if( this.get('session').isAuthenticated && !Ember.isEmpty(this.get('currentUserId'))  ){
			if( this.get('userId') === this.get('currentUserId')) {
				this.set('isProfileOwner', true);
			}
		}
		this.set('url', window.location.href);

	}.observes('userId', 'currentUserId', 'model.id'),

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