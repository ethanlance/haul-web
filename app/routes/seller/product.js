import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {

console.log("PARAMS", params)

		if( params.product_slug === "product"){
			return {};
		}
		var _this = this;

		var collection = this.modelFor('seller');

console.log("COLLECTION", collection);

		var key = collection.get('id') + "-" + params.product_id;

		return this.store.find('collection-product', key).then(function(result){

			console.log("PRODUCTS", result);
			return result;
		}, function() {
			console.log("BOOM", params)
			return _this.transitionTo('not-found');
		});
 	}
//,
// 	serialize: function(model) {

// 		if(model && model.get('name') ){

// 			var slug = model.get('name');
//     		slug = slug.toLowerCase().replace(/ /g,'-').replace(/[-]+/g, '-').replace(/[^\w-]+/g,''); 
// console.log("SLUG", slug);
//     		return { 
//     			product_id: model.get('id'),
//     			product_slug: slug 
//     		};
// 		}
//   	},
});









