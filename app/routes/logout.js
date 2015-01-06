import Ember from 'ember';

var LogoutRoute = Ember.Route.extend({
	controllerName: "auth",
	beforeModel: function(){
	
		if( this.get('session').isAuthenticated ){
			this.get('session').invalidate();	
		}
		
		this.transitionTo('login');
	}
});
export default LogoutRoute;


