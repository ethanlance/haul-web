import Ember from 'ember';

var CollectionIndexRoute = Ember.Route.extend({ 
	model: function() {
		var collection_id = this.modelFor('collection').get('id');
		return this.store.find('collection-product-list', {collection_id: collection_id});
 		// return this.store.filter('collection-product-list', function(mpl) {
 		// 	if( mpl.get('id') && mpl.get('collection_id') === collection_id) return true;
 		// });
	},
 	setupController: function(controller) {	
  		controller.set('collection', this.modelFor('collection'));
 	},
	renderTemplate: function(controller, model){
		this.render('collection/index', {
			into: 'application',
			outlet: 'main',
			controller: controller,
			model: model
		});
		this._super(controller, model);
	}
});
export default CollectionIndexRoute;
