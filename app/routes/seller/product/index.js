import Ember from 'ember';
import ResetScrollMixin from '../../../mixins/resetscroll';

export default Ember.Route.extend(ResetScrollMixin, {
	// beforeModel: function() { 
	// 	if( !Ember.isEmpty(Haul.get('currentUser')) ){
	// 		this.store.find('user-collection', {user_id: Haul.get('currentUser').id});
	// 	} 
	// },
	model: function() { 
		return this.modelFor('seller.product');
	}
});