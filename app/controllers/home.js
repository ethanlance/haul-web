import Ember from 'ember';

export default Ember.ObjectController.extend({

	currentUserIdBinding: 'Haul.currentUser.id',
	currentUserBinding: 'Haul.currentUser',
	isProfileOwner: true,  
	model:false,

	start: function() {
			
		var _this = this; 
		var currentUser = this.get('currentUser');

		if( !this.get('currentUser')){
			return;
		}

		return this.store.find('collection', currentUser.get('collection').get('slug')).then(function(result){ 
			_this.set('model', result);
		}, function(error) {
			console.log("ERROR", error);	
		});


	}.on('init').observes('currentUserId'), 

	getProducts: function() {
		if(!this.get('model').id){
			return;
		}

		console.log("MODEL ", this.get('model'))
		var model = this.get('model');
		this.store.find("collection-product-list", {'collection_id':model.get('id')} )
		.then(function(records){
			model.set('products', records);
		});
	}.observes('model'),
}); 