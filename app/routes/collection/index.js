import Ember from 'ember';
 
export default Ember.Route.extend({ 
	model: function() {
		var collection_id = this.modelFor('collection').get('id');
		return this.store.find('collection-product-list', {collection_id: collection_id}).then(function(results){
			console.log("MODEL " , results);
			return results;
		});
 		// return this.store.filter('collection-product-list', function(mpl) {
 		// 	if( mpl.get('id') && mpl.get('collection_id') === collection_id) return true;
 		// });
	},
 	setupController: function(controller, model) {	
  		controller.set('collection', this.modelFor('collection')); 
 		this._super(controller, model);
 	}
}); 
