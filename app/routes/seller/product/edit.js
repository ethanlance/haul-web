import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import ResetScrollMixin from '../../../mixins/resetscroll';

export default Ember.Route.extend(AuthenticatedRouteMixin, ResetScrollMixin, {
	
	model: function() { 
		return this.modelFor('seller.product');
	},
	setupController: function(controller, model){
		controller.set('model', model);
		
		this.store.find('product', model.get('product').get('id'))
		.then(function(record){
			controller.set('modelProduct', record);	
		});
	}
}); 