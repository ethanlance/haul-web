import Ember from 'ember';
export default Ember.Route.extend( {
	model: function(params) { 
		var _this = this; 
		return this.store.find('collection', params.slug).then(function(result){ 
			return result;
		}, function() {
			return _this.transitionTo('not-found');
		});
	},	
	setupController: function(controller, model) {
		controller.set('collection', model);
		this._super(controller, model);
	},
	// serialize: function(model) { 
	// //	if(!Ember.isEmpty(model) && model.id){
	// 	console.log("HERE MODEL SLUG", model.get('slug'))
 // 	   		return { slug: model.get('slug') };
	// //	}
	// } 
});