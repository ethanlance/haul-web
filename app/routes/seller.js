import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) { 
		var _this = this; 
		return this.store.find('user', params.user_slug).then(function(result){ 
			return result;
		}, function() {
			return _this.transitionTo('not-found');
		});
	},	
	serialize: function(model) { 
		if(!Ember.isEmpty(model) && model.id){
 	   		return { user_slug: model.id };
		}
	}
});