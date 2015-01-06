import Ember from 'ember';

/**
	Single Product View
**/

export default Ember.Route.extend({
	model: function(params) {
		if( params.product_slug === "product"){
			return {};
		}
		var _this = this;
		return this.store.find('product', params.product_slug).then(function(result){
			return result;
		}, function() {
			return _this.transitionTo('not-found');
		});
	},
	serialize: function(model) {
		if(model){
    		return { product_slug: model.get('id') };
		}
  	},
});









