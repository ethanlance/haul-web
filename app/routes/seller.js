import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AuthenticatedRouteMixin, {
	model: function(params) { 
		var _this = this; 
		return this.store.find('collection', params.slug).then(function(result){ 
			return result;
		}, function() {
			return _this.transitionTo('not-found');
		});
	},	
	// serialize: function(model) { 
	// //	if(!Ember.isEmpty(model) && model.id){
	// 	console.log("HERE MODEL SLUG", model.get('slug'))
 // 	   		return { slug: model.get('slug') };
	// //	}
	// }
});