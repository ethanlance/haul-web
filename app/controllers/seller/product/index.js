import Ember from 'ember';
var $ = Ember.$;  


//SHOW one product
var ProductIndexController = Ember.ObjectController.extend({  
	//currentUser: Ember.computed.alias('controllers.auth.currentUser'),
	url: "",

	init: function() {

	},
	
	//Is currentUser viewing his own page?
	isProfileOwner: false,
	collectionsBinding: "collections.collections",
	 
	setup: function() { 
		var currentUser = this.get('currentUser');
		if( currentUser ){
			if( !Ember.isEmpty(currentUser) && this.get('user').id === currentUser.get('id')) {
				this.set('isProfileOwner', true);
			}
		}

		this.set('url', window.location.href);
	}.observes('model'),

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
export default ProductIndexController;