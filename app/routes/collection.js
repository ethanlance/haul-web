import Ember from 'ember';

/**
	Single STORE view 
		- Display seller's products
**/	
var CollectionRoute = Ember.Route.extend({
	model: function(params) {
		var _this = this;
		return this.store.find('collection', params.collection_slug).then(function(result){
			return result;
		}, function() {
			return _this.transitionTo('not-found');
		});
	},	
	serialize: function(model) {
		if(!Ember.isEmpty(model) && model.id){
 	   		return { collection_slug: model.get('slug') };
 	   	}
 	}
});
export default CollectionRoute;






