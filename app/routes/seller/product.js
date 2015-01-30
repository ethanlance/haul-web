import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import ResetScrollMixin from '../../mixins/resetscroll';
export default Ember.Route.extend(AuthenticatedRouteMixin, ResetScrollMixin,{
	model: function(params) {

		if( params.product_slug === "product"){
			return {};
		}
		var _this = this;

		var collection = this.modelFor('seller');

		var key = collection.get('id') + "-" + params.product_id;

		return this.store.find('collection-product', key).then(function(result){
			return result;
		}, function() {
			return _this.transitionTo('not-found');
		});
 	},
 	setupController: function(controller, model) {
 		controller.set('model', model);
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









