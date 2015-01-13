import Ember from 'ember';
 
export default Ember.Route.extend({ 
	model: function(params) { 
		var collection_id = this.modelFor('collection').get('id');
		var product_id = params.product_slug; 
		var key = collection_id + '-' + product_id; 
		return this.store.find('collection-product', key);
	},

	serialize: function(model) {

		console.log("MODEL", model);

    	return { product_slug: model.get('id') };
  	}, 
});