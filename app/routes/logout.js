import Ember from 'ember';
import AnonRoute from './anon';
export default AnonRoute.extend({
	controllerName: "auth",
	beforeModel: function(){
	
		if( this.get('session').isAuthenticated ){
			this.get('session').invalidate();	
		}
		
		this.transitionTo('login');
	}
});