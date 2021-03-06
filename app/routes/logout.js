import Ember from 'ember';
import AnonMixin from '../mixins/anon';
export default Ember.Route.extend(AnonMixin, {
	controllerName: "auth",
	beforeModel: function(){
	
		if( this.get('session').isAuthenticated ){
			this.get('session').invalidate();	
		}
		window.location = "/discover";
		//this.transitionTo('discover');
	}
});