import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) { 
		var _this = this; 
		return this.store.find('collection', params.slug).then(function(result){ 
			return result;
		}, function() {
			return _this.transitionTo('not-found');
		});
	},	
	// serialize: function(model) { 
	// 	if(!Ember.isEmpty(model) && model.id){
 // 	   		return { slug: model.slug };
	// 	}
	// }
});