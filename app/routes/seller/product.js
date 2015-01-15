import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		if( params.slug === "product"){
			return {};
		}
		var _this = this;
		return this.store.find('collection-product', params.slug).then(function(result){
			return result;
		}, function() {
			return _this.transitionTo('not-found');
		});
	},
	serialize: function(model) {
		if(model){
    		return { slug: model.get('id') };
		}
  	},
});









